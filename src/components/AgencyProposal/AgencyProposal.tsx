import { Button, Typography } from "@material-tailwind/react";
import { Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GetUserProjectsDetail } from "../../api/lib/project";
import { Link } from "react-router-dom";
import {
  AcceptProposal,
  GetAgencyProposalDetail,
  RejectProposal,
} from "../../api/lib/proposal";
import { storage } from "../../firebase/firebase";
import { FaPaperclip } from "react-icons/fa6";
import { motion } from "framer-motion";

interface IAgencyProposal {
  handleClose: () => void;
  id: string;
}

export default function AgencyProposal({ handleClose, id }: IAgencyProposal) {
  const [propsal, setProposal] = useState<any>(null);
  const [link, setLink] = useState<any>("");

  useEffect(() => {
    async function getProjectDetails() {
      const result = await GetAgencyProposalDetail(id);
      console.log(result);

      if (result.data.data) {
        console.log(result.data.data);
        setProposal(result.data.data);
      }
    }

    getProjectDetails();
  }, [id]);
  async function handleRejectProposal() {
    const result = await RejectProposal(id);
    console.log(result);
  }

  async function handleAcceptProposal() {
    const result = await AcceptProposal(id, propsal.project_id);
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center z-[1000]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative h-[80vh] max-h-[60rem]"
      >
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 "
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h3" placeholder={undefined} className="capitalize">
          {propsal?.company_name}’s proposal for your project
        </Typography>
        <div className="flex w-full px-10  mt-6  gap-2 overflow-y-auto pb-12">
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
                Company Name:{" "}
                <span className="font-normal">{propsal?.company_name}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Office address:{" "}
                <span className="font-normal">{propsal?.address}</span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Rating:{" "}
                <span className="font-normal">{propsal?.rating}/5.0</span>
              </Typography>

              <Link
                to={`/agencypage/${propsal?.page_id}`}
                className="text-primary underline font-bold"
              >
                See Agency Page
              </Link>
            </div>
            <div className="grid w-full shadow-lg px-6 py-8 border rounded-xl gap-4 h-fit">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Agency contact
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
                Email address:{" "}
                <span className="font-normal">{propsal?.email_address}</span>
              </Typography>
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
            <Typography
              variant="h6"
              placeholder={undefined}
              className="capitalize"
            >
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
                {propsal?.skills.map((i) => (
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
        {propsal?.accepted === 0 ? (
          <div className="flex w-fit justify-center py-2 gap-4 mt-auto">
            <Button
              placeholder={undefined}
              className="flex bg-red-300 text-red-700 min-w-[8rem] items-center justify-center w-fit capitalize"
              size="lg"
              onClick={handleRejectProposal}
            >
              Reject proposal
            </Button>
            <Button
              placeholder={undefined}
              className="flex text-tertiary min-w-[8rem] items-center justify-center bg-primary w-fit capitalize"
              size="lg"
              onClick={handleAcceptProposal}
            >
              Accept proposal
            </Button>
          </div>
        ) : propsal?.accepted === 1 ? (
          <div className="flex justify-center py-6 absolute bottom-0 rounded-b-2xl gap-4 mt-auto w-full px-10 bg-red-50 text-red-500 font-bold">
            You have decline this proposal
          </div>
        ) : propsal?.accepted === 2 ? (
          <div className="flex justify-center py-6 absolute bottom-0 rounded-b-2xl gap-4 mt-auto w-full px-10 bg-green-50 text-green-500 font-bold">
            You have accept this proposal
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
