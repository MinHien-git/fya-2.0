import { useEffect, useState } from "react";
import { GetSavePage, RemoveSavePage } from "../../api/lib/page";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { faA } from "@fortawesome/free-solid-svg-icons";
interface IAgencyCard {
  page_id?: string;
  company_name?: string;
  logo?: string;
  isEmpty: boolean;
  handleDelete: () => void;
}
function AgencySaveCard({
  page_id,
  company_name,
  logo,
  isEmpty,
  handleDelete,
}: IAgencyCard) {
  return (
    <>
      {isEmpty ? (
        <li className="font-sans flex border-2 rounded-2xl border-dashed w-full py-8 px-8 border-gray items-center  shadow-xl bg-white">
          <PlusCircleIcon className="w-6 h-6 mr-2" />
          <p className="text-text">Add an agency</p>
        </li>
      ) : (
        <li
          className="font-sans flex border-2 rounded-2xl w-full py-8 px-8 items-center shadow-xl bg-white"
          key={page_id}
        >
          <img
            src={logo}
            alt="company_logo"
            className="w-12 h-12 mr-4 rounded-full"
          />
          <p className="text-text font-bold">{company_name}</p>
          <div className="flex ml-auto">
            <Link to={`/agencypage/${page_id}`}>
              {" "}
              <Button
                variant="text"
                placeholder={undefined}
                className="text-primary underline underline-offset-2"
              >
                Visit Agency Page
              </Button>
            </Link>
            <Button
              variant="text"
              placeholder={undefined}
              className="text-red-500 underline underline-offset-2"
              onClick={() => handleDelete()}
            >
              Delete
            </Button>
          </div>
        </li>
      )}
    </>
  );
}
export default function SaveList() {
  const [saved, setSaved] = useState<Array<any>>([]);
  const [edit, setEdit] = useState<boolean>(false);
  async function handleDelete(id: string) {
    const result = await RemoveSavePage(id);
    console.log(result);
    setEdit(true);
  }

  async function fetchData() {
    const result = await GetSavePage();

    console.log(result);

    if (result.data.data) {
      setSaved(result.data.data);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (edit) {
      fetchData();
      setEdit(false);
    }
  }, [edit]);
  return (
    <main className="w-full min-h-80 p-2 ">
      <section className="w-full border-2 max-w-7xl py-5 px-4 sm:px-16 lg:px-24 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center lg:justify-between  shadow-2xl bg-white">
        <div className="py-5 w-full text-center  mb-12">
          <h2 className="text-2xl py-2 font-bold text-center md:text-2xl lg:text-5xl ">
            My Saved Agencies
          </h2>
          <p>Save your favorite Agencies here!</p>
          <ul className="grid mt-5 gap-3 md:flex-nowrap md:w-full border-2 py-4 px-2 sm:px-4 md:p-8 md:gap-5 rounded-[3rem] justify-normal w-full max-w-[40rem] mx-auto shadow-xl bg-white">
            {saved.map((i) => (
              <AgencySaveCard
                isEmpty={false}
                company_name={i.company_name}
                logo={i.logo}
                page_id={i.page_id}
                handleDelete={() => handleDelete(i.page_id)}
              />
            ))}
            {new Array(5)}
            {Array.apply(null, new Array(5)).map((i) => (
              <AgencySaveCard
                isEmpty={true}
                handleDelete={() => handleDelete("")}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
