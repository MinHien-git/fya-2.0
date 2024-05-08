import { Typography, Button, Rating, Textarea } from "@material-tailwind/react";
import { Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GetProposalDetail } from "../../api/lib/proposal";
import { RatedIcon, UnratedIcon } from "../RatingAndFeedback/RatingAndFeedback";
import { postUserFeedback } from "../../api/lib/feedback";
interface IRatingProposal {
  handleClose: () => void;
  id: string;
  project_id: string;
}

interface IUserRating {
  name: string;
  value: number;
}

export default function RatingProposal({
  handleClose,
  id,
  project_id,
}: IRatingProposal) {
  const [index, SetIndex] = useState<number>(1);
  const [proposal, SetProposal] = useState<any>({});
  const [perfomance, setPerfomance] = useState<Array<IUserRating>>([
    { name: "Punctuality", value: 0 },
    { name: "Work Ethics", value: 0 },
  ]);
  const [rating, setRating] = useState<number>(0);
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    SetIndex(0);
  }, []);

  useEffect(() => {
    async function getProjectDetails() {
      const result = await GetProposalDetail(id, project_id);
      console.log(result);

      if (result.data.data) {
        console.log(result.data.data);
        SetProposal(result.data.data);
      }
    }

    getProjectDetails();
  }, [id]);

  async function handleSubmit() {
    let result = await postUserFeedback(proposal?.project_id, {
      client_rate: perfomance,
      note: note,
      rating: rating,
    });
    console.log(result);
  }

  return index === 0 ? (
    <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
      <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 "
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h2" placeholder={undefined} className="capitalize">
          {proposal?.client_name}’s project
        </Typography>
        <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto">
          <div className="w-1/2 flex flex-col gap-4 ">
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Client’s detail:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Name:{" "}
                <span className="font-normal">
                  {proposal?.fname} {proposal?.lname}
                </span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Office address:{" "}
                <span className="font-normal">{proposal?.client_location}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Rating:{" "}
                <span className="font-normal">
                  {proposal?.user_rating?.toFixed(1)}/5.0
                </span>
              </Typography>

              <Link to="/" className="text-primary underline font-bold">
                See {proposal?.client_name}’s Review and Feedback
              </Link>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Client company detail:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Company name:{" "}
                <span className="font-normal">{proposal?.client_name}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Office address:{" "}
                <span className="font-normal">{proposal?.client_location}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Team size:{" "}
                <span className="font-normal"> {proposal?.client_size}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Industry:{" "}
                <span className="font-normal">{proposal?.industry}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Your role in the company:{" "}
                <span className="font-normal"> {proposal?.client_role}</span>
              </Typography>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Your rating and feedback:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Rating: <span className="font-normal">0.0/5.0</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Feedback: <span className="font-normal">No feedback yet.</span>
              </Typography>
              <Button
                placeholder={undefined}
                className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                size="md"
                onClick={() => SetIndex(1)}
              >
                Send feedback
              </Button>
            </div>
          </div>
          <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit">
            <Typography
              variant="h4"
              placeholder={undefined}
              className="capitalize"
            >
              Your proposal for the project:
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              {proposal?.project_title}
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
                {proposal?.services?.map((i) => (
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
                {proposal?.skills?.map((i) => (
                  <li className="text-text bg-secondary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              <span className="font-bold">Proposed price:</span>{" "}
              {proposal?.price}
            </p>

            <p>
              <span className="font-bold">Proposed duration: </span>{" "}
              {proposal?.duration}
            </p>

            <div className="grid w-full">
              <p>
                <span className="font-bold">Proposal:</span>
              </p>
              <p>{proposal?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]">
      <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]">
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h4" placeholder={undefined} className="capitalize">
          Review & Feedback for Client Name’s project
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
                unratedIcon={<UnratedIcon />}
                ratedIcon={<RatedIcon />}
                className="flex gap-2"
                value={rating}
                onChange={(value) => setRating(value)}
              />
              <Typography variant="h6" placeholder={undefined}>
                Rated this client on:
                <span className="font-normal"> [dd/mm/yyyy]</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Duration of the project:{" "}
                <span className="font-normal"> [mm/yyyy - mm/yyyy]</span>
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
              <ul className="flex flex-wrap gap-2">
                {proposal?.services?.map((i) => (
                  <li className="text-white bg-primary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Rate your client
              </Typography>
              <div className="flex gap-4 flex-col">
                {/* {perfomance.map((i) => (
                  <>
                    <Typography
                      variant="h6"
                      placeholder={undefined}
                      className="text-primary"
                    >
                      {i.name}:
                    </Typography>
                    <Rating
                      placeholder={undefined}
                      unratedIcon={<UnratedIcon />}
                      ratedIcon={<RatedIcon />}
                      value={i.value}
                      className="flex gap-2"
                      onChange={(value) => {
                        setPerfomance([
                          ...perfomance.filter((p) => p.name !== i.name),
                          { name: i.name, value: value },
                        ]);
                      }}
                    />
                  </>
                ))} */}
                <Typography
                  variant="h6"
                  placeholder={undefined}
                  className="text-primary"
                >
                  {"Punctuality"}:
                </Typography>
                <Rating
                  placeholder={undefined}
                  unratedIcon={<UnratedIcon />}
                  ratedIcon={<RatedIcon />}
                  className="flex gap-2"
                  onChange={(value) => {
                    setPerfomance([
                      ...perfomance.filter((p) => p.name !== "Punctuality"),
                      { name: "Punctuality", value: value },
                    ]);
                  }}
                />
                <Typography
                  variant="h6"
                  placeholder={undefined}
                  className="text-primary"
                >
                  {"Work Ethics"}:
                </Typography>
                <Rating
                  placeholder={undefined}
                  unratedIcon={<UnratedIcon />}
                  ratedIcon={<RatedIcon />}
                  className="flex gap-2"
                  onChange={(value) => {
                    setPerfomance([
                      ...perfomance.filter((p) => p.name !== "Work Ethics"),
                      { name: "Work Ethics", value: value },
                    ]);
                  }}
                />
              </div>
            </div>
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
                className="flex text-text min-w-[8rem] items-center justify-center bg-secondary w-1/2"
                size="md"
                onClick={() => {
                  handleSubmit();
                  SetIndex(1);
                }}
              >
                Send feedback
              </Button>
            </div>
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
              <Typography variant="h6" placeholder={undefined}>
                Client name:{" "}
                <span className="font-normal"> {proposal?.client_name}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Client job title:{" "}
                <span className="font-normal"> {proposal?.client_role}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Client email address:
                <span className="font-normal">
                  {" "}
                  {proposal?.fname} {proposal?.lname}
                </span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Client company name:
                <span className="font-normal">{proposal?.client_email}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Client company industry:
                <span className="font-normal">{proposal?.industry}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Client company size:
                <span className="font-normal">{proposal?.client_size}</span>
              </Typography>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-min">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Your comment on your collaboration with Client Name:
              </Typography>
              <Textarea
                placeholder={undefined}
                rows={6}
                label="Feedback"
                onChange={(e) => setNote(e.target.value)}
                value={note}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
