import React from 'react';
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Popup from '../../../components/AdminPopup/AdminBigPopup';
import {
  GetProjectsData
} from "../../../api/lib/admin";

const TABLE_HEAD: string[] = [
  "No.",
  "Match date",
  "Project_ID",
  "Project's name",
  "Price",
  "Budget",
  "Duration",
  "Project detail",
  "Agency's name",
  "Page_ID",
  "Agency's rating",
  "Client's name",
  "Client User_ID",
  "Company's name",
  "Client's rating"
];

const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function ProjectsData() {
  const [projectsData, setProjectsData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>('');

  const toggleProjectPopup = (project) => {
    setSelectedProject(project);
    setShowProjectPopup(!showProjectPopup);
  };
  
  const fetchProjectsData= async () => {
    const result = await GetProjectsData();
    if (result.data.data) {
      setProjectsData(result.data.data);
    }
  };

  useEffect(() => {
    fetchProjectsData();

    const intervalId = setInterval(fetchProjectsData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = projectsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <rect
              x="1"
              y="1"
              width="22"
              height="22"
              rx="3"
              stroke-width="2"
              stroke="black"
            />
            <path
              d="M5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536L8.82843 15.5355C9.02369 15.7308 9.34027 15.7308 9.53553 15.5355C9.7308 15.3403 9.7308 15.0237 9.53553 14.8284L6.70711 12L9.53553 9.17157C9.7308 8.97631 9.7308 8.65973 9.53553 8.46447C9.34027 8.2692 9.02369 8.2692 8.82843 8.46447L5.64645 11.6464ZM18.3536 12.3536C18.5488 12.1583 18.5488 11.8417 18.3536 11.6464L15.1716 8.46447C14.9763 8.2692 14.6597 8.2692 14.4645 8.46447C14.2692 8.65973 14.2692 8.97631 14.4645 9.17157L17.2929 12L14.4645 14.8284C14.2692 15.0237 14.2692 15.3403 14.4645 15.5355C14.6597 15.7308 14.9763 15.7308 15.1716 15.5355L18.3536 12.3536ZM6 12.5L18 12.5V11.5L6 11.5V12.5Z"
              stroke="black"
            />
          </svg>
          <p>Projects Data (Successfully Matched)</p>
        </div>
      </div>
      <div className="table-container overflow-x-scroll overflow-y-scroll">
        <Table hoverable>
          <Table.Head>
            {TABLE_HEAD.map((i, index) => (
              <Table.HeadCell key={index} className="capitalize text-center border-l-2">
                {i}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map(
              ({
                project_id,
                projectTitle,
                projectDescription,
                post_by,
                project_status,
                projectDuration,
                services,
                skills,
                position,
                location,
                localization,
                languages,
                industry,
                companyLocation,
                companySize,
                companyName,
                budgetRange,
                created_date,
                proposal_id,
                description,
                price,
                attachments,
                duration,
                accepted,
                proposal_date,
                completed_date,
                page_id,
                company_name,
                team_members,
                address,
                email_address,
                phone_number,
                prating,
                id,
                email,
                lname,
                fname,
                rating,
              }, index) => (
                <Table.Row
                  key={page_id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="border text-xs">{startIndex + index + 1}</Table.Cell>
                  <Table.Cell className="border text-xs">{formatDate(completed_date)}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{project_id}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{projectTitle}</Table.Cell>
                  <Table.Cell className="border text-xs">{price}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{budgetRange}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{duration}</Table.Cell>
                  <Table.Cell className="border text-xs truncate"><span className="cursor-pointer text-blue underline" onClick={() => toggleProjectPopup({
                      project_id,
                      projectTitle,
                      projectDescription,
                      post_by,
                      project_status,
                      projectDuration,
                      services,
                      skills,
                      position,
                      location,
                      localization,
                      languages,
                      industry,
                      companyLocation,
                      companySize,
                      companyName,
                      budgetRange,
                      created_date,
                      proposal_id,
                      description,
                      price,
                      attachments,
                      duration,
                      accepted,
                      proposal_date,
                      completed_date,
                      page_id,
                      company_name,
                      team_members,
                      address,
                      email_address,
                      phone_number,
                      prating,
                      id,
                      email,
                      lname,
                      fname,
                      rating,
                    })}>Project detail</span></Table.Cell>
                  <Table.Cell className="border text-xs truncate">{company_name}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{page_id}</Table.Cell>
                  <Table.Cell className="border text-xs">{prating}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{fname} {lname}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{id}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{companyName}</Table.Cell>
                  <Table.Cell className="border text-xs">{rating}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>

        <Popup show={showProjectPopup} onClose={toggleProjectPopup}>
          <h2 className="text-2xl font-bold text-center mb-4">Projects detail:</h2>
          <section className="w-full mx-auto px-2 flex mt-1 gap-2">          
            <div className="grid gap-2">
              <div className="max-w-[22rem] rounded-xl border-2 flex-col pl-8 pr-16 py-4">
                <h2 className="text-lg font-bold mb-2">{selectedProject.fname} {selectedProject.lname} company detail:</h2>
                <p className="text-sm mb-1"><strong>Company Name:</strong> {selectedProject.companyName}</p>
                <p className="text-sm mb-1"><strong>Client's Name:</strong> {selectedProject.fname} {selectedProject.lname}</p>
                <p className="text-sm mb-1"><strong>Client's role in the company:</strong></p>
                <p className="text-sm mb-1"><strong>Office address:</strong> {selectedProject.companyLocation}</p>
                <p className="text-sm mb-1"><strong>Team size:</strong> {selectedProject.companySize}</p>
                <p className="text-sm mb-1"><strong>Industry:</strong> {selectedProject.industry}</p>
                <p className="text-sm mb-1"><strong>Rating:</strong> {selectedProject.rating}</p>
              </div>
              <div className="max-w-[22rem] rounded-xl border-2 flex-col pl-8 pr-16 py-4">
                <h2 className="text-lg font-bold mb-2">Agency detail:</h2>
                <p className="text-sm mb-1"><strong>Name:</strong> {selectedProject.company_name}</p>
                <p className="text-sm mb-1"><strong>Office address:</strong> {selectedProject.address}</p>
                <p className="text-sm mb-1"><strong>Team size:</strong> {selectedProject.team_members}</p>
                <p className="text-sm mb-1"><strong>Rating:</strong> {selectedProject.prating}</p>
              </div>
            </div>
            <div className="rounded-xl border-2 flex-col px-8 py-4">
              <h2 className="text-lg font-bold mb-2">Project title:</h2>
              <h2 className="text-lg font-bold mb-2">{selectedProject.projectTitle}</h2>
              <p className="text-sm mb-1"><strong>Services provided:</strong></p>
              {selectedProject.services && (
                <div className="grid gap-2 border-2 rounded-xl p-0.5">
                  <div className="flex">
                    {selectedProject.services.slice(0, 3).map((service, index) => (
                      <div key={index} className="text-sm mx-0.5 py-0.5 px-6 rounded-lg bg-blue text-white">{service}</div>
                    ))}
                    {selectedProject.services.length > 3 && (
                      <div>{`+${selectedProject.services.length - 3} more`}</div>
                    )}
                  </div>
                </div>
              )}
              <p className="text-sm mb-1"><strong>Skills provided:</strong></p>
              {selectedProject.skills && (
                <div className="grid gap-2 border-2 rounded-xl p-0.5">
                  <div className="flex">
                    {selectedProject.skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="text-sm mx-0.5 py-0.5 px-6 rounded-lg bg-secondary">{skill}</div>
                    ))}
                    {selectedProject.skills.length > 3 && (
                      <div>{`+${selectedProject.skills.length - 3} more`}</div>
                    )}
                  </div>
                </div>
              )}
              <div className="grid gap-2 mt-2">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="lg:w-1/2">
                    <p className="text-sm mb-1"><strong>Agency's email:</strong> {selectedProject.email_address}</p>
                    <p className="text-sm mb-1"><strong>Client's email:</strong> {selectedProject.email}</p>
                    <p className="text-sm mb-1"><strong>Price:</strong> {selectedProject.price}</p>
                    <p className="text-sm mb-1"><strong>Duration:</strong> {selectedProject.duration}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="text-sm mb-1"><strong>Agency's phone number:</strong> {selectedProject.phone_number}</p>
                    <p className="text-sm mb-1"><strong>Client's phone number:</strong> None</p>
                    <p className="text-sm mb-1"><strong>Budget range:</strong> {selectedProject.budgetRange}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm mt-2 mb-1"><strong>Briefing description:</strong></p>
              <p className="text-sm mb-1">{selectedProject.projectDescription}</p>
              <p className="text-sm mt-2 mb-1"><strong>Proposal:</strong></p>
              <p className="text-sm mb-1">{selectedProject.description}</p>
            </div>
          </section>
        </Popup>

      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={startIndex + itemsPerPage >= projectsData.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
