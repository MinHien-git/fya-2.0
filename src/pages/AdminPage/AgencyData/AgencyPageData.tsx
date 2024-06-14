import React from 'react';
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Popup from '../../../components/AdminPopup/AdminPopup';
import { 
  GetAgencyPage
} from "../../../api/lib/admin";

const TABLE_HEAD: string[] = [
  "No.",
  "Agency name",
  "Admin name",
  "Agency email",
  "Agency phone number",
  "Contacts",
  "Description & Tagline",
  "Services & Skills",
  "Awards",
  "Portfolio",
  "Admin",
  "Page_ID",
  "Create_by",
  "Team size",
  "Rating",
  "Join Date",
  "Founded In",
  "Turnover",
];

interface Service {
  service_id: string;
  price: number;
  service_description: string;
  skill_tags: string[];
  service_tags: string[];
}

interface Award {
  award_id: string;
  catergory: string;
  date: string;
  url: string;
  award_name: string;
}

interface Portfolio {
  portfolio_id: string;
  media: string;
  project_name: string;
  client_name: string;
  client_address: string;
  client_sector: string;
  budget: number;
  services: string[];
  skills: string[];
  description: string;
  start_date: string;
  end_date: string;
  project_scope: string;
  project_audience: string;
  client_email: string;
  result_link: string;
}

const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function AgencyPageData() {
  const [agencyPage, setAgencyPage] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const [agencyName, setAgencyName] = useState<string>('');

  const [showContactPopup, setShowContactPopup] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>('');

  const [showDescriptionPopup, setShowDescriptionPopup] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState<any>('');
  const [selectedTagline, setSelectedTagline] = useState<any>('');

  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const [selectedServices, setSelectedServices] = useState<Service[] | null>(null);

  const [showAwardsPopup, setShowAwardsPopup] = useState(false);
  const [selectedAwards, setSelectedAwards] = useState<Award[] | null>(null);

  const [showPortfoliosPopup, setShowPortfoliosPopup] = useState(false);
  const [selectedPortfolios, setSelectedPortfolios] = useState<Portfolio[] | null>(null);
  const [mediaUrl, setMediaUrl] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(null);
  
  const toggleContactPopup = (contact: string, companyName: string) => {
    setSelectedContact(contact);
    setAgencyName(companyName);
    setShowContactPopup(!showContactPopup);
  };

  const toggleDescriptionPopup = (description: string, tagline:string, companyName: string) => {
    setSelectedDescription(description);
    setSelectedTagline(tagline);
    setAgencyName(companyName);
    setShowDescriptionPopup(!showDescriptionPopup);
  };

  const toggleServicesPopup = (services: Service[] | null, companyName: string) => {
    setSelectedServices(services || []);
    setAgencyName(companyName);
    setShowServicesPopup(!showServicesPopup);
  };

  const toggleAwardsPopup = (awards: Award[] | null, companyName: string) => {
    setSelectedAwards(awards || []);
    setAgencyName(companyName);
    setShowAwardsPopup(!showAwardsPopup);
  };

  const togglePortfoliosPopup = (portfolios: Portfolio[] | null, companyName: string) => {
    setSelectedPortfolios(portfolios || []);
    setAgencyName(companyName);
    setShowPortfoliosPopup(!showPortfoliosPopup);
  };

  const handleMediaClick = (mediaUrl, index) => {
    if (activeMediaIndex === index){
      setMediaUrl(null);
      setActiveMediaIndex(null);
    } else {
      setMediaUrl(mediaUrl);
      setActiveMediaIndex(index);
    }
  };
  
  const fetchAgencyPage = async () => {
    const result = await GetAgencyPage();
    if (result.data.data) {
      setAgencyPage(result.data.data);
    }
  };

  useEffect(() => {
    fetchAgencyPage();

    const intervalId = setInterval(fetchAgencyPage, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = agencyPage.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="w-full min-h-80 py-2 pt-0 flex flex-col gap-2 overflow-y-auto h-full mx-auto">
      <div className="w-full">
        <div className="flex justify-center items-center h-[4rem] border-b-2 gap-4">
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 22 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              opacity="0.4" 
              d="M11.1226 11.7795C11.0526 11.7695 10.9626 11.7695 10.8826 11.7795C9.12265 11.7195 7.72266 10.2795 7.72266 8.50947C7.72266 6.69948 9.18265 5.22949 11.0026 5.22949C12.8126 5.22949 14.2826 6.69948 14.2826 8.50947C14.2726 10.2795 12.8826 11.7195 11.1226 11.7795Z" 
              stroke="#000" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
            <path 
              opacity="0.34" 
              d="M17.7397 18.3795C15.9597 20.0095 13.5997 20.9995 10.9998 20.9995C8.39974 20.9995 6.03976 20.0095 4.25977 18.3795C4.35977 17.4396 4.95976 16.5196 6.02976 15.7996C8.76974 13.9796 13.2497 13.9796 15.9697 15.7996C17.0397 16.5196 17.6397 17.4396 17.7397 18.3795Z" 
              stroke="#000" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
            <path 
              d="M10.9999 20.9999C16.5227 20.9999 20.9999 16.5227 20.9999 10.9999C20.9999 5.47713 16.5227 1 10.9999 1C5.47713 1 1 5.47713 1 10.9999C1 16.5227 5.47713 20.9999 10.9999 20.9999Z" 
              stroke="#000" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
          <p>User's data</p>
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
          <p>Agency Page Data</p>
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
                page_id,
                create_by,
                pdes,
                company_name,
                team_members,
                founded_date,
                rating,
                email_address,
                phone_number,
                tagline,
                turnover,
                created_date,
                contact_description,
                services,
                awards,
                portfolios
              }, index) => (
                <Table.Row
                  key={page_id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="border text-xs">{startIndex + index + 1}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{company_name}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">First name + last name</Table.Cell>
                  <Table.Cell className="border text-xs">{email_address}</Table.Cell>
                  <Table.Cell className="border text-xs">{phone_number}</Table.Cell>
                  <Table.Cell className="border text-xs"><span className="cursor-pointer text-blue underline" onClick={() => toggleContactPopup(contact_description, company_name)}>Contact</span></Table.Cell>
                  <Table.Cell className="border text-xs truncate"><span className="cursor-pointer text-blue underline" onClick={() => toggleDescriptionPopup(pdes, tagline, company_name)}>Description & Tagline</span></Table.Cell>
                  <Table.Cell className="border text-xs truncate"><span className="cursor-pointer text-blue underline" onClick={() => toggleServicesPopup(services, company_name)}>Services & Skills</span></Table.Cell>
                  <Table.Cell className="border text-xs"><span className="cursor-pointer text-blue underline" onClick={() => toggleAwardsPopup(awards, company_name)}>Award</span></Table.Cell>
                  <Table.Cell className="border text-xs"><span className="cursor-pointer text-blue underline" onClick={() => togglePortfoliosPopup(portfolios, company_name)}>Portfolio</span></Table.Cell>
                  <Table.Cell className="border text-xs truncate">{create_by}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{page_id}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{create_by}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{team_members}</Table.Cell>
                  <Table.Cell className="border text-xs">{rating}</Table.Cell>
                  <Table.Cell className="border text-xs">{formatDate(created_date)}</Table.Cell>
                  <Table.Cell className="border text-xs">{formatDate(founded_date)}</Table.Cell>
                  <Table.Cell className="border text-xs">{turnover}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>

        <Popup show={showContactPopup} onClose={toggleContactPopup}>
          <h2 className="text-lg font-bold mb-4">{agencyName} contacts:</h2>
          <p className="text-sm"> {} &bull; <strong>Address:</strong> 
          {selectedContact ? (
            <> {selectedContact}</>
          ) : (
            " No contact available."
          )}
          </p>
          <p className="text-sm"> {} &bull; <strong>External links: </strong>No external link available.</p>
        </Popup>

        <Popup show={showDescriptionPopup} onClose={toggleDescriptionPopup}>
          <h2 className="text-lg font-bold mb-4">{agencyName} description & tagline:</h2>
          <p className="text-sm mb-1"> {} &bull; <strong>Description:</strong></p>
          {selectedDescription ? (
            <p className="text-sm mb-1"> {} {selectedDescription}</p>
          ) : (
            <p className="text-sm mb-1">No description available.</p>
          )}
          <p className="text-sm mb-1"> {} &bull; <strong>Tagline:</strong></p>
          {selectedTagline ? (
            <p className="text-sm mb-1"> {} {selectedTagline}</p>
          ) : (
            <p className="text-sm mb-1">No tagline available.</p>
          )}
        </Popup>

        <Popup show={showServicesPopup} onClose={() => toggleServicesPopup(null, "")}>
          <h2 className="text-lg font-bold mb-4">{agencyName} services and skills:</h2>
          {selectedServices && selectedServices.length > 0 ? (
            selectedServices.map((service, index) => (
              <div key={index} className="text-sm mb-4">
                <p className='mb-1'>&bull; <strong>Service:</strong> {service.service_tags}</p>
                <p className='ml-5 mb-1'>&bull; <strong>Price:</strong> {service.price}</p>
                <p className='ml-5 mb-1'>&bull; <strong>Description:</strong> {service.service_description}</p>
                <p className='ml-5 mb-1'>&bull; <strong>Skill included:</strong> {service.skill_tags.join(", ")}</p>
              </div>
            ))
          ) : (
            <p>No services available.</p>
          )}
        </Popup>

        <Popup show={showAwardsPopup} onClose={() => toggleAwardsPopup(null, "")}>
          <h2 className="text-lg font-bold mb-4">{agencyName} awards:</h2>
          {selectedAwards && selectedAwards.length > 0 ? (
            selectedAwards.map((award, index) => (
              <div key={index} className="text-sm mb-4">
                <p className='mb-1'>&bull; <strong>Award:</strong> {award.award_name}</p>
                <p className='ml-5 mb-1'>&bull; <strong>Category:</strong> {award.catergory}</p>
                <p className='ml-5 mb-1'>&bull; <strong>Date:</strong> {award.date}</p>
                <p className='ml-5 mb-1'>&bull; <strong>URL:</strong> {award.url}</p>
              </div>
            ))
          ) : (
            <p>No awards available.</p>
          )}
        </Popup>
        
        <Popup show={showPortfoliosPopup} onClose={() => togglePortfoliosPopup(null, "")}>
          <h2 className="text-lg font-bold mb-4">{agencyName} portfolio:</h2>
          <div className="max-h-96 overflow-y-auto">
            {selectedPortfolios && selectedPortfolios.length > 0 ? (
              selectedPortfolios.map((portfolio, index) => (
                <div key={index} className="text-sm mb-4">
                  <p className='mb-1'>&bull; <strong>Project:</strong> {portfolio.project_name}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Project's media: </strong> 
                      <button 
                        type="button" 
                        onClick={() => handleMediaClick(portfolio.media, index)}
                        className="text-blue underline focus:outline-none"
                      >
                        See Media
                      </button>
                    </p>
                    {mediaUrl && activeMediaIndex === index && (
                      <div className="ml-5">
                        <img src={mediaUrl} alt="Project Media" />
                      </div>
                    )}
                    <p className='ml-5 mb-1'>&bull; <strong>Service provided:</strong> {portfolio.services.join(", ")}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Skills provided:</strong> {portfolio.skills.join(", ")}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Client's details:</strong></p>
                      <p className='ml-10 mb-1'>&bull; Company name: {portfolio.client_name}</p>
                      <p className='ml-10 mb-1'>&bull; Company address: {portfolio.client_address}</p>
                      <p className='ml-10 mb-1'>&bull; Company sector: {portfolio.client_sector}</p>
                      <p className='ml-10 mb-1'>&bull; Project's scope: {portfolio.project_scope}</p>
                      <p className='ml-10 mb-1'>&bull; Project's audience: {portfolio.project_scope}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Client's budget:</strong> {portfolio.budget}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Description for the project:</strong> {portfolio.description}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Duration:</strong> {formatDate(portfolio.start_date)} - {formatDate(portfolio.end_date)}</p>
                    <p className='ml-5 mb-1'>&bull; <strong>Result link:</strong> {portfolio.result_link}</p>
                </div>
              ))
              ) : (
              <p>No portfolios available.</p>
            )}
          </div>
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
          disabled={startIndex + itemsPerPage >= agencyPage.length}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
