import { Button, Rating, Textarea, Typography } from "@material-tailwind/react";
import { Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GetUserProjectsDetail } from "../../api/lib/project";
import { Link } from "react-router-dom";
import {
  AcceptProposal,
  GetAgencyProposalDetail,
  GetAgencyProposalFeedbackDetail,
  RejectProposal,
} from "../../api/lib/proposal";
import { storage } from "../../firebase/firebase";
import { FaPaperclip } from "react-icons/fa6";
import { postFeedback } from "../../api/lib/feedback";
import { motion } from "framer-motion";
interface IRatingAndFeedback {
  handleClose: () => void;
  id: string;
  project_id: string;
}

export function RatedIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#FFCB37" />
    </svg>
  );
}

export function UnratedIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="13.5" stroke="#476FD4" stroke-width="5" />
    </svg>
  );
}
interface IPerformance {
  name: string;
  value: number;
}

export default function RatingAndFeedback({
  handleClose,
  id,
  project_id,
}: IRatingAndFeedback) {
  const [propsal, setProposal] = useState<any>(null);
  const [link, setLink] = useState<any>("");
  const [rating, setRating] = useState<number>(0);
  const [index, SetIndex] = useState(0);
  const [description, setDescription] = useState<string>("");
  const [perfomance, setPerfomance] = useState<Array<IPerformance>>([]);

  useEffect(() => {
    async function getProjectDetails() {
      const result = await GetAgencyProposalFeedbackDetail(project_id, id);
      console.log(result);

      if (result.data.data) {
        console.log(result.data.data);

        setPerfomance(
          result.data.data.services.map((i) => {
            return { name: i, value: 0 };
          })
        );
        setProposal(result.data.data);
        setDescription(result.data.data.feedback_description);
        if (result.data.data.perfomance) {
          setPerfomance(result.data.data.perfomance[0]);
        }
        setRating(result.data.data.feedback_rating);
      }
    }

    getProjectDetails();
  }, [id]);

  async function handleSubmit() {
    let result = await postFeedback(propsal?.project_id, propsal?.page_id, {
      performance: perfomance,
      description: description,
      rating: rating,
    });
    console.log(result);
  }

  useEffect(() => {
    if (propsal?.attachments) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
        setLink(window.URL.createObjectURL(blob));
      };
      xhr.open("GET", propsal?.attachments);
      xhr.send();
    }
  }, [propsal]);

  useEffect(() => {
    console.log(perfomance);
  }, [perfomance]);

  return (
    <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center max-w-[72rem] relative h-[80vh] max-h-[60rem]"
      >
        {index === 0 ? (
          <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
            <div
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
              onClick={handleClose}
            >
              <IoCloseSharp className="w-6 h-6" />
            </div>
            <Typography
              variant="h2"
              placeholder={undefined}
              className="capitalize"
            >
              Completed {propsal?.company_name}’s project
            </Typography>
            <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto h-fit">
              <div className="w-1/2 flex flex-col gap-4 ">
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Agency detail
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Name:{" "}
                    <span className="font-normal">{propsal?.company_name}</span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Office address:{" "}
                    <span className="font-normal">{propsal?.address}</span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Rating:{" "}
                    <span className="font-normal">
                      {propsal?.rating?.toFixed(1)}/5.0
                    </span>
                  </Typography>

                  <Link
                    to={`/agencypage/${propsal?.page_id}`}
                    className="text-primary underline font-bold"
                  >
                    See Agency Page
                  </Link>
                </div>
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Your company detail:
                  </Typography>
                  {/* <Typography variant="h6" placeholder={undefined}>
                Contact person: <span className="font-normal">[Name]</span>
              </Typography>
              <Typography variant="small" placeholder={undefined}>
                [Name] is your contact person and will get in touch with you
                shortly.
              </Typography> */}
                  <Typography variant="h6" placeholder={undefined}>
                    Phone number:{" "}
                    <span className="font-normal">{propsal?.phone_number}</span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Email address
                    <span className="font-normal">
                      {propsal?.email_address}
                    </span>
                  </Typography>
                </div>
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Your rating and feedback:
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Rating:{" "}
                    <span className="font-normal">
                      {propsal?.rating?.toFixed(1)}/5.0
                    </span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Feedback:{" "}
                    <span className="font-normal">
                      {propsal?.feedback_id
                        ? `Rated on ${propsal?.rated_date.split("T")[0]}`
                        : "No feedback yet."}
                    </span>
                  </Typography>
                  <Button
                    placeholder={undefined}
                    className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                    size="md"
                    onClick={() => SetIndex(1)}
                  >
                    {propsal?.feedback_id ? "View feedback" : "Send feedback"}
                  </Button>
                </div>
              </div>
              <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit">
                <Typography
                  variant="h4"
                  placeholder={undefined}
                  className="capitalize"
                >
                  Proposal for your project
                </Typography>
                <Typography variant="h6" placeholder={undefined}>
                  {propsal?.project_title}
                </Typography>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email2"
                      value="Services wanted:"
                      className="font-bold"
                    />
                  </div>
                  <ul className="w-full h-[6rem] border-2 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                    {propsal?.services.map((i) => (
                      <li className="text-white bg-primary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email2"
                      value="Skills required:"
                      className="font-bold"
                    />
                  </div>
                  <ul className="w-full h-[6rem] border-2 rounded-lg flex gap-2 pt-3 flex-wrap items-start px-2 overflow-y-auto py-3">
                    {propsal?.skills.map((i) => (
                      <li className="text-text bg-secondary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  <span className="font-bold">Proposed price:</span>{" "}
                  {propsal?.price}
                </p>

                <p>
                  <span className="font-bold">Proposed duration: </span>{" "}
                  {propsal?.duration}
                </p>

                <div className="grid w-full">
                  <p>
                    <span className="font-bold">Proposal:</span>
                  </p>
                  <p>{propsal?.description}</p>
                </div>
                <div className="grid w-full">
                  <p>
                    <span className="font-bold">Attachments:</span>
                  </p>
                  <div className="flex flex-col gap-2 overflow-y-auto py-4">
                    <a
                      className="px-4 py-4 w-full text-primary font-bold underline-offset-2 underline border-2 rounded-xl cursor-pointer flex gap-6 items-center"
                      download
                      href={link}
                    >
                      <FaPaperclip /> Attached file
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]"
          >
            <div
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
              onClick={handleClose}
            >
              <IoCloseSharp className="w-6 h-6" />
            </div>
            <Typography
              variant="h2"
              placeholder={undefined}
              className="capitalize"
            >
              Review & Feedback for {propsal?.company_name}’s project
            </Typography>
            <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto h-fit">
              <div className="w-1/2 flex flex-col gap-4 ">
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Rating
                  </Typography>
                  <Rating
                    placeholder={undefined}
                    className="flex gap-2"
                    ratedIcon={<RatedIcon />}
                    unratedIcon={<UnratedIcon />}
                    onChange={(value) => setRating(value)}
                    value={rating}
                  />
                  <Typography variant="h6" placeholder={undefined}>
                    Rated this agency on:
                    <span className="font-normal">
                      {" "}
                      {propsal?.rated_date
                        ? propsal?.rated_date.split("T")[0]
                        : "___"}
                    </span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Duration of the project:{" "}
                    <span className="font-normal"> {propsal?.duration}</span>
                  </Typography>
                </div>
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Services provided
                  </Typography>
                  <div className="flex gap-4 flex-col">
                    {propsal?.performance
                      ? propsal?.performance[0].map((i) => (
                          <>
                            <Typography
                              variant="h6"
                              placeholder={undefined}
                              className="text-primary"
                            >
                              {i.name}
                            </Typography>
                            <Rating
                              placeholder={undefined}
                              className="flex gap-2"
                              ratedIcon={<RatedIcon />}
                              unratedIcon={<UnratedIcon />}
                              value={i.value}
                              id={i.name}
                              readonly
                            />
                          </>
                        ))
                      : propsal?.services.map((i) => (
                          <>
                            <Typography
                              variant="h6"
                              placeholder={undefined}
                              className="text-primary"
                            >
                              {i}
                            </Typography>
                            <Rating
                              placeholder={undefined}
                              className="flex gap-2"
                              ratedIcon={<RatedIcon />}
                              unratedIcon={<UnratedIcon />}
                              onChange={(value) => {
                                setPerfomance([
                                  ...perfomance.filter((p) => p.name !== i),
                                  { name: i, value: value },
                                ]);
                              }}
                            />
                          </>
                        ))}
                  </div>
                </div>
                {!propsal?.feedback_id ? (
                  <div className="flex w-full justify-between py-2 gap-4 mt-auto">
                    <Button
                      placeholder={undefined}
                      className="flex bg-red-300 text-red-700 min-w-[8rem] items-center justify-center w-1/2"
                      size="lg"
                      onClick={() => SetIndex(0)}
                    >
                      Cancel
                    </Button>
                    <Button
                      placeholder={undefined}
                      className="flex text-tertiary min-w-[8rem] items-center justify-center bg-secondary w-1/2 text-text"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Send feedback
                    </Button>
                  </div>
                ) : null}
              </div>
              <div className="gap-2 flex flex-col">
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Contacts & Details (from project info)
                  </Typography>
                  {/* <Typography variant="h6" placeholder={undefined}>
                Your name: <span className="font-normal">{proposals?.client_name}</span>
              </Typography> */}
                  <Typography variant="h6" placeholder={undefined}>
                    Your job title:{" "}
                    <span className="font-normal">
                      {propsal?.client_position}
                    </span>
                  </Typography>
                  {/* <Typography variant="h6" placeholder={undefined}>
                Your email address:
                <span className="font-normal">{propsal?.client_position}</span>
              </Typography> */}
                  <Typography variant="h6" placeholder={undefined}>
                    Your company name:
                    <span className="font-normal">{propsal?.client_name}</span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Your company industry:
                    <span className="font-normal">
                      {propsal?.client_industry}
                    </span>
                  </Typography>
                  <Typography variant="h6" placeholder={undefined}>
                    Your company size:
                    <span className="font-normal">{propsal?.client_size}</span>
                  </Typography>
                </div>
                <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
                  <Typography
                    variant="h4"
                    placeholder={undefined}
                    className="capitalize"
                  >
                    Your comment on Agency Name’s work:
                  </Typography>
                  <Textarea
                    placeholder={undefined}
                    rows={6}
                    label="Feedback"
                    disabled={propsal?.feedback_description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
