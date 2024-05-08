import { Typography } from "@material-tailwind/react";
import { Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GetUserProjectsDetail } from "../../api/lib/project";
import { motion } from "framer-motion";
interface IProjectBrief {
  handleClose: () => void;
  id: string;
}

export default function ProjectBrief({ handleClose, id }: IProjectBrief) {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    async function getProjectDetails() {
      const result = await GetUserProjectsDetail(id);
      console.log(result);

      if (result.data.data) {
        console.log(result.data.data);
        setProject(result.data.data);
      }
    }

    getProjectDetails();
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="w-[100vw] h-[100vh] bg-blue-gray-500/50 absolute top-0 left-0 flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl min-w-[70rem] flex flex-col items-center py-10 max-w-[72rem] relative z-[1000] h-[80vh] max-h-[60rem]"
      >
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
          onClick={handleClose}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>
        <Typography variant="h2" placeholder={undefined} className="capitalize">
          Your project brief
        </Typography>
        <div className="flex w-full px-10  mt-6  gap-2 items-start overflow-y-auto">
          <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border">
            <Typography
              variant="h4"
              placeholder={undefined}
              className="capitalize"
            >
              Your company detail
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              Company Name:{" "}
              <span className="font-normal">{project?.companyName}</span>
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              Office address:{" "}
              <span className="font-normal">{project?.companyLocation}</span>
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              Team size:{" "}
              <span className="font-normal">{project?.companySize}</span>
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              Industry: <span className="font-normal">{project?.industry}</span>
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              Your role in the company:{" "}
              <span className="font-normal">{project?.position}</span>
            </Typography>
          </div>
          <div className="w-1/2 shadow-lg rounded-xl px-6 py-8 flex flex-col gap-4 border h-fit mb-8">
            <Typography
              variant="h4"
              placeholder={undefined}
              className="capitalize"
            >
              Proposal for your project
            </Typography>
            <Typography variant="h6" placeholder={undefined}>
              {project?.companyName}
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
            <div className="flex justify-between gap-4">
              <div className="w-1/2 grid gap-4">
                <p>
                  <span className="font-bold">Budget range:</span>{" "}
                  {project?.budgetRange}
                </p>
                <p>
                  <span className="font-bold">Project duration:</span>{" "}
                  {project?.projectDuration}
                </p>
              </div>
              <div className="w-1/2">
                <p>
                  <span className="font-bold">Language(s):</span>{" "}
                  {project?.languages.join(",")}
                </p>
              </div>
            </div>
            <p>
              <span className="font-bold">
                Searching for agencies in areas of:
              </span>{" "}
              {project?.location}
            </p>
            {/* <div className="flex justify-between">
              <p>
                <span className="font-bold">Phone:</span> +84123456789
              </p>
              <p>
                <span className="font-bold">Email:</span> sample@sample.com
              </p>
            </div> */}
            <div className="grid w-full">
              <p>
                <span className="font-bold">Project Detail:</span>
              </p>
              <p>{project?.projectDescription}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
