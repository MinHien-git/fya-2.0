import {
  Typography,
  Button,
  Rating,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { FileInput, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GetClientProjectDetail } from "../../api/lib/project";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useSelector } from "react-redux";

interface IProposal {
  handleClose: () => void;
  id: string;
}
interface IProposalContent {
  description: string;
  attachments: string;
  durations: string;
  prices: string;
  page_id: string;
  project_id: string;
}
export default function SubmitProposal({ handleClose, id }: IProposal) {
  const page_id = useSelector((state: any) => state.page.page_id);

  const [project, setProject] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [proposal, setProposal] = useState<IProposalContent>({
    description: "",
    attachments: "",
    durations: "",
    prices: "",
    page_id: "",
    project_id: "",
  });

  const handleChange = (e) => {
    setProposal({ ...proposal, [e.target.name]: e.target.value });
  };

  function submitProposal() {
    console.log("submit");
    if (file) {
      console.log("uploading file");
      const imageRef = ref(storage, `files/${file.name + v4()}`);
      uploadBytes(imageRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              let data = {
                ...proposal,
                attachments: url,
                page_id: page_id,
                project_id: id,
              };
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  function handleChangeFile(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    async function getProjectDetails() {
      const result = await GetClientProjectDetail(id);
      console.log(result);

      if (result.data.data) {
        console.log(result.data.data);
        setProject(result.data.data);
      }
    }

    getProjectDetails();
  }, [id]);
  return (
    <div className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative z-[1000] h-[80vh] max-h-[60rem]">
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h2" placeholder={undefined} className="capitalize">
          Submit a proposal to this project
        </Typography>
        <div className="flex w-full px-10  mt-6  gap-2 items-start overflow-y-auto">
          <div className="w-1/2 flex flex-col gap-4 ">
            <div className="w-full shadow-lg border rounded-xl px-6 py-8 flex flex-col gap-4 ">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Project submission information:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Submitting a proposal for this project will cost 0$
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                After submitting this proposal, your FyaMatch balance will be
                $0.
              </Typography>
            </div>
            <div className="w-full shadow-lg border rounded-xl px-6 py-8 flex flex-col gap-4">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Client’s company detail:
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Compny Name:{" "}
                <span className="text-text font-normal">
                  {!project?.company_name
                    ? "(Hidden until Accepted)"
                    : project?.company_name}
                </span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Office address:
                <span className="text-text font-normal">
                  {!project?.company_location
                    ? "(Hidden until Accepted)"
                    : project?.company_location}
                </span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Team size:
                <span className="text-text font-normal">
                  {!project?.company_size
                    ? "(Hidden until Accepted)"
                    : project?.company_size}
                </span>
              </Typography>
              <Typography variant="h6" placeholder={undefined}>
                Industry:{" "}
                <span className="text-text font-normal">
                  {project?.industry}
                </span>
              </Typography>
            </div>
            <div className="w-full shadow-lg border rounded-xl px-6 py-8 flex flex-col gap-4 mb-12">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Your Proposal for this Project
              </Typography>
              <div className="block">
                <Label
                  htmlFor="comment"
                  value="Proposal description:"
                  className="font-bold"
                />
              </div>
              <Textarea
                id="comment"
                required
                rows={4}
                name="description"
                onChange={handleChange}
              />
              <div className="block">
                <Label
                  htmlFor="comment"
                  value="Attachments (optional):"
                  className="font-bold"
                />
              </div>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <FileInput
                    id="dropzone-file"
                    className="hidden"
                    onChange={handleChangeFile}
                  />
                </Label>
              </div>
              <Typography variant="small" placeholder={undefined}>
                Attach up to 10 files that showcase your agency’s expertise and
                skills. Max file size: 25MB each.
              </Typography>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="email3"
                    value="Proposed duration for this project:"
                  />
                </div>
                <Select
                  label="Select project duration"
                  placeholder={undefined}
                  name="duration"
                  onChange={handleChange}
                >
                  <Option>1 day</Option>
                  <Option>1 weeks</Option>
                  <Option>1 - 3 weeks</Option>
                  <Option>1 month</Option>
                  <Option>2 - 3 months</Option>
                </Select>
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="price"
                    value="Proposed price for this project:"
                  />
                </div>
                <TextInput
                  placeholder="Type price..."
                  id="price"
                  name="price"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-fullshadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit">
              <Typography
                variant="h4"
                placeholder={undefined}
                className="capitalize"
              >
                Project detail:
              </Typography>
              <Typography
                variant="h6"
                placeholder={undefined}
                className="capitalize"
              >
                {project?.project_title}
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
                  {project?.services.map((i) => (
                    <li className="text-primary bg-tertiary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold">
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
                  {project?.skills.map((i) => (
                    <li className="text-text bg-secondary w-auto text-xs h-auto px-2 py-2 rounded-md font-bold">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                <span className="font-bold">Budget range:</span>{" "}
                {project?.company_budget}
              </p>
              <p>
                <span className="font-bold">Project duration:</span>{" "}
                {project?.project_duration}
              </p>

              <div className="grid w-full">
                <Typography variant="h6" placeholder={undefined}>
                  <span className="font-bold">Project brief:</span>
                </Typography>
                <Typography
                  variant="paragraph"
                  placeholder={undefined}
                  className="mt-2"
                >
                  {project?.project_description}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 justify-end">
          <Button
            placeholder={undefined}
            className="bg-tertiary text-primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button placeholder={undefined} className="bg-red-400 text-red-100">
            Reject Project
          </Button>
          <Button
            placeholder={undefined}
            className="bg-primary text-white"
            onClick={submitProposal}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
