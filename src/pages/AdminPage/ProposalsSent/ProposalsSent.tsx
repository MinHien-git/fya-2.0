import React from 'react';
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Popup from '../../../components/AdminPopup/AdminBigPopup';
import {
  GetProposalsSent
} from "../../../api/lib/admin";

const TABLE_HEAD: string[] = [
  "No.",
  "Agency name",
  "Page_ID",
  "Agency's rating",
  "Project's name",
  "Proposal description",
  "Proposed duration",
  "Proposed price",
  "Client's name",
  "Client User_ID",
  "Company's name",
  "Client phone number",
  "Date"
];

const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function ProposalsSent() {
  const [proposalsSent, setProposalsSent] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [showProposalsSentPopup, setShowProposalsSentPopup] = useState(false);
  const [selectedProposalsSent, setSelectedProposalsSent] = useState<any>('');

  const toggleProposalsSentPopup = (proposalsSent) => {
    setSelectedProposalsSent(proposalsSent);
    setShowProposalsSentPopup(!showProposalsSentPopup);
  };
  
  const fetchProposalsSent = async () => {
    const result = await GetProposalsSent();
    if (result.data.data) {
      setProposalsSent(result.data.data);
    }
  };

  useEffect(() => {
    fetchProposalsSent();

    const intervalId = setInterval(fetchProposalsSent, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = proposalsSent.slice(startIndex, startIndex + itemsPerPage);

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
          <p>Projects Data</p>
          <svg 
            width="24" 
            height="19" 
            viewBox="0 0 17 19" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path 
              d="M1.25952 0.993734C1.25953 0.717592 1.03568 0.493727 0.759535 0.493717C0.483393 0.493708 0.259528 0.717558 0.259518 0.993701L1.25952 0.993734ZM0.759077 14.0473L1.25908 14.0474L0.759077 14.0473ZM1.75918 15.0474L1.75923 15.5474L1.75918 15.0474ZM15.8748 15.3995C16.0701 15.2042 16.07 14.8876 15.8748 14.6924L12.6924 11.5107C12.4972 11.3155 12.1806 11.3155 11.9853 11.5108C11.7901 11.7061 11.7901 12.0226 11.9854 12.2179L14.8141 15.046L11.986 17.8747C11.7908 18.07 11.7908 18.3866 11.9861 18.5819C12.1814 18.7771 12.4979 18.7771 12.6932 18.5818L15.8748 15.3995ZM0.259518 0.993701L0.259077 14.0473L1.25908 14.0474L1.25952 0.993734L0.259518 0.993701ZM1.75923 15.5474L15.5213 15.5459L15.5212 14.5459L1.75913 14.5474L1.75923 15.5474ZM0.259077 14.0473C0.259049 14.8758 0.930725 15.5475 1.75923 15.5474L1.75913 14.5474C1.48296 14.5474 1.25907 14.3235 1.25908 14.0474L0.259077 14.0473Z" 
              stroke="#000"
            />
          </svg>
          <p>Proposals sent by agency to client's briefing</p>
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
                company_name,
                address,
                team_members,
                page_id,
                phone_number,
                prating,
                projectTitle,
                projectDescription,
                projectDuration,
                services,
                skills,
                industry,
                companyLocation,
                companySize,
                companyName,
                description,
                price,
                duration,
                proposal_date,
                attachments,
                id,
                lname,
                fname,
                rating,
                contact_lname,
                contact_fname,
                contact_email,
              }, index) => (
                <Table.Row
                  key={page_id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="border text-xs">{startIndex + index + 1}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{company_name}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{page_id}</Table.Cell>
                  <Table.Cell className="border text-xs">{prating}</Table.Cell>
                  <Table.Cell className="border text-xs truncate"><span className="cursor-pointer text-blue underline" onClick={() => toggleProposalsSentPopup({
                    company_name,
                    address,
                    team_members,
                    page_id,
                    phone_number,
                    prating,
                    projectTitle,
                    projectDescription,
                    projectDuration,
                    services,
                    skills,
                    industry,
                    companyLocation,
                    companySize,
                    companyName,
                    description,
                    price,
                    duration,
                    proposal_date,
                    attachments,
                    id,
                    lname,
                    fname,
                    rating,
                    contact_lname,
                    contact_fname,
                    contact_email,
                    })}>{projectTitle}</span></Table.Cell>
                  <Table.Cell className="border text-xs truncate">{description}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{projectDuration}</Table.Cell>
                  <Table.Cell className="border text-xs">{price}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{fname} {lname}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{id}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{companyName}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">Client phone number?</Table.Cell>
                  <Table.Cell className="border text-xs">{formatDate(proposal_date)}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>

        <Popup show={showProposalsSentPopup} onClose={toggleProposalsSentPopup}>
          <h2 className="text-2xl font-bold text-center mb-4">Projects detail:</h2>
          <section className="w-full mx-auto px-2 flex mt-1 gap-2">          
            <div className="grid gap-2">
              <div className="max-w-[22rem] rounded-xl border-2 flex-col pl-8 pr-16 py-4">
                <h2 className="text-lg font-bold mb-2">Agency detail:</h2>
                <p className="text-sm mb-1"><strong>Name:</strong> {selectedProposalsSent.company_name}</p>
                <p className="text-sm mb-1"><strong>Office address:</strong> {selectedProposalsSent.address}</p>
                <p className="text-sm mb-1"><strong>Team size:</strong> {selectedProposalsSent.team_members}</p>
                <p className="text-sm mb-1"><strong>Rating:</strong> {selectedProposalsSent.prating}</p>
              </div>
              <div className="max-w-[22rem] rounded-xl border-2 flex-col pl-8 pr-16 py-4">
                <h2 className="text-lg font-bold mb-2">Agency contact:</h2>
                <p className="text-sm mb-1"><strong>Contact person:</strong> {selectedProposalsSent.contact_fname} {selectedProposalsSent.contact_lname}</p>
                <p className="text-sm mb-1"><strong>Phone number:</strong> {selectedProposalsSent.phone_number}</p>
                <p className="text-sm mb-1"><strong>Email address:</strong> {selectedProposalsSent.contact_email}</p>
              </div>
              <div className="max-w-[22rem] rounded-xl border-2 flex-col pl-8 pr-16 py-4">
                <h2 className="text-lg font-bold mb-2">{selectedProposalsSent.fname} {selectedProposalsSent.lname} company detail:</h2>
                <p className="text-sm mb-1"><strong>Company Name:</strong> {selectedProposalsSent.companyName}</p>
                <p className="text-sm mb-1"><strong>Client's Name:</strong> {selectedProposalsSent.fname} {selectedProposalsSent.lname}</p>
                <p className="text-sm mb-1"><strong>Client's role in the company:</strong></p>
                <p className="text-sm mb-1"><strong>Office address:</strong> {selectedProposalsSent.companyLocation}</p>
                <p className="text-sm mb-1"><strong>Team size:</strong> {selectedProposalsSent.companySize}</p>
                <p className="text-sm mb-1"><strong>Industry:</strong> {selectedProposalsSent.industry}</p>
                <p className="text-sm mb-1"><strong>Rating:</strong> {selectedProposalsSent.rating}</p>
              </div>

            </div>
            <div className="rounded-xl border-2 flex-col px-8 py-4">
              <h2 className="text-lg font-bold mb-2">Proposal for {selectedProposalsSent.fname} {selectedProposalsSent.lname} project</h2>
              <h2 className="text-lg font-bold mb-2">{selectedProposalsSent.projectTitle}</h2>
              <p className="text-sm mb-1"><strong>Services wanted:</strong></p>
              {selectedProposalsSent.services && (
                <div className="grid gap-2 border-2 rounded-xl p-0.5">
                  <div className="flex">
                    {selectedProposalsSent.services.slice(0, 3).map((service, index) => (
                      <div key={index} className="text-sm mx-0.5 py-0.5 px-6 rounded-lg bg-blue text-white">{service}</div>
                    ))}
                    {selectedProposalsSent.services.length > 3 && (
                      <div>{`+${selectedProposalsSent.services.length - 3} more`}</div>
                    )}
                  </div>
                </div>
              )}
              <p className="text-sm mb-1"><strong>Skills required:</strong></p>
              {selectedProposalsSent.skills && (
                <div className="grid gap-2 border-2 rounded-xl p-0.5">
                  <div className="flex">
                    {selectedProposalsSent.skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="text-sm mx-0.5 py-0.5 px-6 rounded-lg bg-secondary">{skill}</div>
                    ))}
                    {selectedProposalsSent.skills.length > 3 && (
                      <div>{`+${selectedProposalsSent.skills.length - 3} more`}</div>
                    )}
                  </div>
                </div>
              )}
              <div className="grid gap-2 mt-2 max-w-[35rem]">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="lg:w-1/2 mr-1">
                    <p className="text-sm mb-1"><strong>Proposed price:</strong> {selectedProposalsSent.price}</p>
                    <p className="text-sm mb-1"><strong>Proposed duration:</strong> {selectedProposalsSent.duration}</p>
                    <p className="text-sm mb-1"><strong>Proposal:</strong></p>
                    <p className="text-sm mb-1">{selectedProposalsSent.description}</p>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="text-sm mb-1"><strong>Client's phone number:</strong></p>
                    <p className="text-sm mb-1"><strong>Client's name:</strong> {selectedProposalsSent.fname} {selectedProposalsSent.lname}</p>
                    <p className="text-sm"><strong>Attachments:</strong></p>
                    {selectedProposalsSent.attachments && (
                      <a 
                        href={selectedProposalsSent.attachments} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue underline"
                      >
                        See Attachments
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
          disabled={startIndex + itemsPerPage >= proposalsSent.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
