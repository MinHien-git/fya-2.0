import React from 'react';
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  GetUsers
} from "../../../api/lib/admin";

const TABLE_HEAD: string[] = [
  "No.",
  "First Name",
  "Last Name",
  "Email",
  "Phone number (from verification)",
  "Agency admin=1 User=0",
  "User_ID",
  "Page_ID",
  "Rating",
  "Join Date",
];

const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function UserData() {
  const [users, setUsers] = useState<any>([]);

  const fetchUsers = async () => {
    const result = await GetUsers();
    if (result.data.data) {
      setUsers(result.data.data);
    }
  };

  useEffect(() => {
    fetchUsers();

    const intervalId = setInterval(fetchUsers, 10000);
    return () => clearInterval(intervalId);
  }, []);

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
            {users.map(
              ({
                fname,
                id,
                email,
                lname,
                role,
                page_id,
                rating,
                founded_date,
                phone_number,
              }, index) => (
                <Table.Row
                  key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="border text-xs">{index + 1}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{fname}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{lname}</Table.Cell>
                  <Table.Cell className="border text-xs">{email}</Table.Cell>
                  <Table.Cell className="border text-xs">{phone_number}</Table.Cell>
                  <Table.Cell className="border text-xs">{role}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{id}</Table.Cell>
                  <Table.Cell className="border text-xs truncate">{page_id}</Table.Cell>
                  <Table.Cell className="border text-xs">{rating}</Table.Cell>
                  <Table.Cell className="border text-xs">{formatDate(founded_date)}</Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
}
