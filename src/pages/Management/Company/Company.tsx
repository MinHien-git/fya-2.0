import { FileInput, Label, Textarea } from "flowbite-react";
import SecondaryNavigationBar from "../../../components/SecondaryNavigationBar/SecondaryNavigationBar";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  GetCompany,
  PostCompanyCover,
  PostCompanyLogo,
  PostCompanyStory,
  PostCompanyTeamCover,
} from "../../../api/lib/page";
import { useSelector } from "react-redux";
interface IImageReview {
  image: any;
  closeReview?: () => void;
}
export function ImageReviewer({ image, closeReview }: IImageReview) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="fixed w-[100vw] h-[100vh] bg-black/50 z-[1000] left-0 top-0 flex justify-center items-center"
    >
      <div className="h-[80%] w-[80%] relative justify-center items-center flex">
        <div
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
          onClick={closeReview}
        >
          <IoCloseSharp className="w-6 h-6" />
        </div>

        <motion.img
          src={image}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          alt="review upload"
          className="object-contain w-full h-full"
        />
      </div>
    </motion.div>
  );
}

export default function Company() {
  const [file, setFile] = useState<any>();
  const [review, setReview] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [coverFile, setCoverFile] = useState<any>();
  const [logoFile, setLogoFile] = useState<any>();
  const [comapny, setComapny] = useState<any>();
  const page_id = useSelector((state: any) => state.page.page_id);
  function handleChange(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }
  function handleChangeCoverFile(e) {
    console.log(e.target.files);
    setCoverFile(e.target.files[0]);
  }
  useEffect(() => {
    async function fetchData() {
      let result = await GetCompany(page_id);
      console.log(result);
      if (result.data.data) {
        console.log(result.data.data.story);
        setComapny(result.data.data);
      }
    }

    fetchData();
  }, []);
  function handleChangeLogoFile(e) {
    console.log(e.target.files);
    setLogoFile(e.target.files[0]);
  }

  async function handleSubmitDescription() {
    let result = await PostCompanyStory(page_id, { story: description });
    console.log(result);
  }
  async function handleSubmitTeamCover() {
    const data = new FormData();
    data.append("my_file", file);
    let result = await PostCompanyTeamCover(page_id, data);
    console.log(result);
  }
  async function handleSubmitCover() {
    const data = new FormData();
    data.append("my_file", coverFile);
    let result = await PostCompanyCover(page_id, data);
    console.log(result);
  }
  async function handleSubmitLogo() {
    console.log(logoFile);
    const data = new FormData();
    data.append("my_file", logoFile);
    data.append("from", "MinhHier");
    console.log(data.get("my_file"));

    let result = await PostCompanyLogo(page_id, data);
    console.log(result);
  }
  return (
    <div className="mt-5 mx-auto h-[80vh] flex flex-col px-12 gap-2 overflow-y-auto">
      {review === 2 &&
        (coverFile ? (
          <ImageReviewer
            image={URL.createObjectURL(coverFile)}
            closeReview={() => setReview(0)}
          />
        ) : (
          <ImageReviewer
            image={comapny.cover}
            closeReview={() => setReview(0)}
          />
        ))}
      {review === 1 &&
        (logoFile ? (
          <ImageReviewer
            image={URL.createObjectURL(logoFile)}
            closeReview={() => setReview(0)}
          />
        ) : (
          <ImageReviewer
            image={comapny.logo}
            closeReview={() => setReview(0)}
          />
        ))}
      {review === 3 &&
        (file ? (
          <ImageReviewer
            image={URL.createObjectURL(file)}
            closeReview={() => setReview(0)}
          />
        ) : (
          <ImageReviewer
            image={comapny.team_cover}
            closeReview={() => setReview(0)}
          />
        ))}
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <div className="flex justify-between items-center">
          <div className="grid">
            <h2 className="font-title text-[1.875rem] font-bold pt-5">
              Team/Company picture
            </h2>
            <p className="text-xs">
              Add a picture of your team/company to your Agency Page.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              placeholder={undefined}
              onClick={() => setReview(3)}
              className="bg-transparent capitalize underline text-primary shadow-none"
            >
              Review
            </Button>
            <Button
              placeholder={undefined}
              className="bg-primary capitalize"
              onClick={handleSubmitTeamCover}
            >
              Save changes
            </Button>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file-company"
            className="flex h-[32rem] mt-4 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput
              id="dropzone-file-company"
              className="hidden"
              onChange={handleChange}
            />
          </Label>
        </div>
      </section>
      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto flex-col px-6">
        <div className="flex justify-between items-center">
          <div className="grid">
            <Label
              className="font-title text-[1.875rem] font-bold pt-5"
              htmlFor="story"
            >
              Story
            </Label>
            <p className="text-xs">
              Give visitors to your profile information about the background and
              core values of your agency.
            </p>
          </div>

          <Button
            placeholder={undefined}
            className="bg-primary capitalize"
            onClick={handleSubmitDescription}
          >
            Save changes
          </Button>
        </div>
        <section className="grid w-full gap-5 mt-4">
          <Textarea
            id="story"
            placeholder="Leave a comment..."
            className="px-2 py-2"
            required
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={comapny?.story}
          />
        </section>
      </section>

      <section className="max-w-7xl w-[90%] pb-10 rounded-xl border-2 mt-10 mx-auto px-12 flex gap-4 justify-between">
        <div className="py-6 grid gap-2 font-title w-fit">
          <div className="flex justify-between items-center pb-5">
            <h3 className="text-3xl font-bold">Logo</h3>

            <div className="flex gap-4 ml-4">
              <Button
                placeholder={undefined}
                onClick={() => setReview(1)}
                className="bg-transparent capitalize underline text-primary shadow-none"
              >
                Review
              </Button>
              <Button
                placeholder={undefined}
                className="bg-primary capitalize"
                onClick={handleSubmitLogo}
              >
                Save changes
              </Button>
            </div>
          </div>
          <div className="flex w-[9.375rem] items-center justify-center mx-5">
            <Label
              htmlFor="dropzone-file-logo"
              className="w-[9.375rem] aspect-square border-dotted rounded-full flex cursor-pointer flex-col items-center justify-center border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="h-8 w-8 text-gray-500 dark:text-gray-400"
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
              </div>
              <FileInput
                id="dropzone-file-logo"
                className="hidden"
                onChange={handleChangeLogoFile}
              />
            </Label>
          </div>
        </div>
        <div className="py-6 grid gap-2 font-title w-3/5">
          <div className="flex justify-between items-center pb-5">
            <h3 className="text-3xl font-bold">Cover</h3>
            <div className="flex gap-4">
              <Button
                placeholder={undefined}
                onClick={() => setReview(2)}
                className="bg-transparent capitalize underline text-primary shadow-none"
              >
                Review
              </Button>
              <Button
                placeholder={undefined}
                className="bg-primary capitalize"
                onClick={handleSubmitCover}
              >
                Save changes
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-center h-[9.375rem]">
            <Label
              htmlFor="dropzone-file-cover"
              className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <FileInput
                id="dropzone-file-cover"
                className="hidden"
                onChange={handleChangeCoverFile}
              />
            </Label>
          </div>
        </div>
      </section>
    </div>
  );
}
