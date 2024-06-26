import { Button } from "@material-tailwind/react";

export default function AgencyPageIntroduction() {
  return (
    <main className="w-full min-h-80 py-2 pt-0">
      <section className="w-full border-2 pb-5 rounded-b-3xl md:mx-auto min-h-[50vh] bg-primary px-3 flex items-center">
        <div className="grid gap-3 px-2 py-5 h-full mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold text-white text-center lg:w-[30rem] font-header">
            Differentiate yourself with{" "}
            <span className="text-secondary">Fya's</span> free{" "}
            <span className="text-secondary">Agency Page</span>
          </h1>
          <Button
            className="bg-secondary text-text md:w-fit mx-auto capitalize"
            placeholder={undefined}
          >
            Create your free Agency Page now!
          </Button>
        </div>
      </section>

      <section className="w-full border-2 max-w-2xl pb-5 rounded-3xl md:mx-auto px-3 mt-[-5rem] bg-white lg:max-w-[30rem]">
        <div className="flex gap-3 px-2 py-5 h-full flex-col">
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-tertiary w-full h-[10rem] rounded-2xl relative">
              <div className="bg-primary aspect-square w-[6rem] absolute rounded-full bottom-[-3rem] left-1/2 -translate-x-1/2 md:left-[calc(25%-4.5rem)]  md:-translate-x-[0] md:w-[9rem] md:bottom-[-4.5rem]"></div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:mt-5 w-full ">
              <div className="flex flex-col gap-3 md:w-1/2 items-center">
                <h2 className="font-bold mt-12 h-fit font-title">
                  Your Agency
                </h2>
                <div className="flex flex-wrap w-full gap-2">
                  <div className="w-1/3 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                  <div className="w-1/2 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                  <div className="w-2/3 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                  <div className="w-1/3 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                  <div className="w-1/2 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                  <div className="w-1/2 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                  <div className="w-1/3 h-[1rem] rounded-lg bg-slate-300 mt-2"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center w-full md:w-1/2 md:grid content-center">
                <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
                  <h5 className="font-semibold text-sm">Services</h5>
                  <ul className="flex gap-1">
                    <li className="bg-secondary w-3 aspect-square rounded-full"></li>
                    <li className="bg-secondary w-3 aspect-square rounded-full"></li>
                    <li className="bg-secondary w-3 aspect-square rounded-full"></li>
                    <li className="bg-secondary w-3 aspect-square rounded-full"></li>
                    <li className="bg-secondary w-3 aspect-square rounded-full"></li>
                  </ul>
                  <p className="font-semibold text-sm">5.0/5.0</p>
                </div>

                <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
                  <h5 className="font-semibold text-sm">Portfolio</h5>
                </div>
                <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
                  <h5 className="font-semibold text-sm">Awards</h5>
                </div>
                <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
                  <h5 className="font-semibold text-sm">Reviews & Feedback</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full pb-10">
          <h2 className="md:text-xl lg:text-[2rem] py-2 font-bold text-center font-title">
            Be seen. Be known.{" "}
            <span className="text-secondary"> For free.</span>
          </h2>
          <p className="text-text text-center">
            Get your internet reputation going
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-tertiary border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Attract potential customers
                </h5>
              </a>
              <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc pl-4">
                <li>Display your portfolio</li>
                <li>Get a verified profile</li>
                <li>Feature your awards</li>
              </ul>
            </div>
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-secondary border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Enhance your brand awareness
                </h5>
              </a>
              <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc pl-4">
                <li>Craft a branded page</li>
                <li>Highlight your services</li>
                <li>Secure your spot in our directories</li>
              </ul>
            </div>
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-tertiary border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Boost credibility with feedback from your customers
                </h5>
              </a>
              <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400 list-disc pl-4">
                <li>Showcase client reviews and feedbacks </li>
                <li>Get recommendations from clients </li>
                <li>All in one place!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full pb-10">
          <h2 className="md:text-xl lg:text-[2rem] py-2 font-bold text-center font-title">
            Establish your agency appearance on Fya{" "}
          </h2>
          <p className="text-secondary text-xl font-bold text-center">
            {" "}
            in 3 simple steps:
          </p>
        </div>
        <div className="py-5 w-11/12 md:w-full grid gap-5 pb-10">
          <div className="bg-tertiary w-full h-10 rounded-3xl relative">
            <div className="absolute h-12 rounded-full aspect-square bg-primary flex justify-center items-center top-1/2 -translate-y-1/2 text-white font-bold md:h-16">
              1
            </div>
          </div>
          <div className="bg-secondary w-8 aspect-square rounded-full justify-self-center"></div>
          <div className="bg-tertiary w-full h-10 rounded-3xl relative">
            <div className="absolute h-12 rounded-full aspect-square bg-primary flex justify-center items-center top-1/2 -translate-y-1/2 text-white font-bold right-0 md:h-16">
              2
            </div>
          </div>
          <div className="bg-secondary w-8 aspect-square rounded-full justify-self-center"></div>
          <div className="bg-tertiary w-full h-10 rounded-3xl relative">
            <div className="absolute h-12 rounded-full aspect-square bg-primary flex justify-center items-center top-1/2 -translate-y-1/2 text-white font-bold md:h-16">
              3
            </div>
          </div>

          <button className="bg-primary text-white font-bold text-xs rounded-lg px-8 py-3 mx-auto md:mx-auto mt-2 sm:mt-5 md:w-fit">
            Create your free Agency Page
          </button>
        </div>
      </section>

      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 md:mx-auto flex flex-col justify-center items-center relative bg-light_yellow">
        <div className="bg-primary w-12 rounded-full absolute left-1/2 -translate-x-1/2 aspect-square top-[-1.5rem]"></div>
        <div className="py-5 w-11/12 md:w-full pb-10">
          <h2 className="md:text-xl lg:text-[2rem] py-2 font-bold text-center font-title">
            Upgrade your revenue stream with{" "}
            <span className="text-secondary">FyaPro.</span>
          </h2>
          <p className="text-text text-center">
            Advanced features starting at $30.99 monthly. Pay flexibly.
          </p>
        </div>
        <div className="py-5 w-11/12 md:w-full grid gap-5 md:flex md:items-center md:gap-0">
          <div className="flex flex-col h-auto sm:h-[32rem] w-full p-6 bg-secondary border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3 relative md:h-[20rem] md:rounded-none  md:rounded-l-2xl">
            <div className="w-14 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 absolute -top-[1.75rem]"></div>
            <a href="/#">
              <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Exclusive Benefits for Your Business
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Get an SEO backlink to your website{" "}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Remove "Suggested Competitors" from your Agency Page
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              Get a FyaPro badge
            </p>
          </div>
          <div className="card mx-auto flex-col py-4 flex items-center gap-1 bg-white border-2 rounded-2xl font-sans  md:w-1/3">
            <img
              className="w-28 mx-auto rounded-full border-8 border-white mb-2"
              src="https://avatars.githubusercontent.com/u/67946056?v=4"
              alt=""
            />
            <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
              <h5 className="text-center text-md font-medium">Agency Name</h5>
              <ul className="flex gap-1 justify-center">
                <li className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-md">
                  Fya Pro
                </li>
                <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                  Verified
                </li>
              </ul>
              <ul className="flex mt-1 gap-1 items-center justify-center">
                <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                <li className="bg-secondary w-3 aspect-square rounded-md"></li>
                <li className="font-bold">0.0/5.0</li>
                <li className="hidden lg:block">(0 review)</li>
              </ul>
            </div>
            <ul className="text-center mt-2 font-light text-sm gap-1 flex flex-wrap w-5/6">
              <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                Digital Marketing
              </li>
              <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                Data Analyzing
              </li>
              <li className="text-xs font-bold bg-tertiary text-primary px-3 py-1 rounded-md">
                Social Media Advertising
              </li>
            </ul>
            <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
            </div>

            <div className="flex w-5/6 gap-1">
              <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                ABC City, Vietnam
              </div>
              <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                SE Asia
              </div>
            </div>
            <div className="w-5/6 bg-slate-200 text-xs text-center py-2 rounded-md">
              From $9999/project
            </div>
            <div className="flex w-5/6 gap-1">
              <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                ABC City, Vietnam
              </div>
              <div className="w-1/2 bg-slate-200 text-xs text-center py-2 rounded-md">
                SE Asia
              </div>
            </div>
            <div className="flex w-5/6 gap-1 my-2">
              <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                Contact
              </button>
              <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
            </div>
          </div>{" "}
          <div className=" flex flex-col h-auto sm:h-[32rem] w-full p-6 bg-secondary border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3 relative mt-5 md:h-[20rem] md:rounded-none md:rounded-r-2xl">
            <div className="w-14 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 absolute -top-[1.75rem]"></div>
            <a href="/#">
              <h5 className="mt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-right">
                Boost Conversion and Visibility
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-right">
              Website Engagement tools
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-right">
              Connect your Social Media
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-right">
              {" "}
              Featured on Competitors's Page
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl px-2 sm:px-4 lg:px-12 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center relative">
        <div className="bg-secondary w-12 rounded-full absolute left-1/2 -translate-x-1/2 aspect-square top-[-1.5rem]"></div>
        <div className="w-full md:flex py-10">
          <div className="w-10/12 mx-auto flex md:w-1/2">
            <div className="relative bg-primary pt-8 pb-5 mt-12 rounded-t-2xl px-5 md:rounded-none md:rounded-l-2xl grid gap-2 md:my-auto w-full">
              <div className="absolute w-12 aspect-square bg-secondary top-[-1.5rem] left-1/2 -translate-x-1/2 rounded-md "></div>
              <h5 className="text-center text-xl font-medium text-white pb-4">
                Advertising Features
              </h5>
              <p className="text-white text-sx">
                Stand out from competitors and reach your target audience
              </p>
              <p className="text-white font-thin text-sx">
                Get promoted on the first page of Fya
              </p>
              <p className="text-white font-thin text-sx">
                Advertise your agency on display ads
              </p>
              <p className="text-white font-thin text-sx">
                Search Engine's priority
              </p>
              <p className="text-white font-thin text-sx">
                Pay by clicks: start from $0.12/click
              </p>
              <button className="bg-white text-primary font-bold text-xs rounded-lg px-8 py-2 mx-auto md:mx-auto sm:mt-5 w-full mt-5 sm:w-auto md:w-[80%]">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full aspect-square bg-tertiary rounded-2xl border-2 md:w-1/2"></div>
        </div>
      </section>
      <section className="w-full max-w-5xl px-2 sm:px-4 lg:px-12 md:mx-auto flex flex-col justify-center items-center relative border-2 bg-light_blue">
        <div className="bg-primary w-12 rounded-full absolute left-1/2 -translate-x-1/2 aspect-square top-[-1.5rem]"></div>
        <div className="w-full md:flex py-10">
          <div className="w-full aspect-square bg-tertiary rounded-2xl border-2 md:w-1/2"></div>
          <div className="w-10/12 mx-auto flex md:w-1/2">
            <div className="relative bg-white pt-8 pb-5 w-full rounded-b-2xl px-5 border-2 md:rounded-none md:rounded-r-2xl grid text-right gap-2 md:my-auto">
              <div className="absolute w-12 aspect-square bg-primary top-[-1.5rem] left-1/2 -translate-x-1/2 rounded-md"></div>
              <h5 className="text-center text-xl font-medium text-black pb-4">
                Leads Extension
              </h5>
              <p className="text-black text-sx">Connect directly to clients.</p>
              <p className="text-black font-thin text-sx">
                Pay for projects you apply only.
              </p>
              <p className="text-black font-thin text-sx">
                Tailor-made project recommendations
              </p>
              <p className="text-black font-thin text-sx">
                Pre-qualified, high-intent leads
              </p>
              <p className="text-black font-thin text-sx">
                Pay by project: start from $2.00/project
              </p>
              <button className="bg-primary text-white font-bold text-xs rounded-lg px-8 py-2 mx-auto md:mx-auto sm:mt-5 w-full mt-5 sm:w-auto md:w-[80%]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-5xl px-2 sm:px-4 lg:px-12 md:mx-auto flex flex-col justify-center items-center relative border-2 bg-light_yellow">
        <div className="bg-secondary w-[80%] rounded-xl absolute left-1/2 -translate-x-1/2 top-[-1rem] py-2">
          <h2 className="md:text-xl lg:text-[2rem] font-bold px-6 text-center font-title">
            and many more features to come!
          </h2>
        </div>
        <div className="py-8 w-full mt-10 grid gap-1 pb-10">
          <h5 className="text-center md:text-xl lg:text-[2rem] font-title mb-4 font-medium text-black">
            <span className="text-secondary">FyaPro</span> is waiting for you!
          </h5>
          <p className="text-black text-sx text-center w-80 mx-auto">
            Experience Fya's comprehensive marketing and sales solution,
            tailored for your agency.
          </p>

          <button className="bg-primary text-white font-bold text-xs rounded-lg px-8 py-2 mx-auto sm:mt-5 mt-5 md:w-fit md:mx-auto">
            Subscribe to FyaPro now
          </button>
        </div>
      </section>

      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <h2 className="md:text-xl lg:text-[2rem] py-2 font-bold text-center font-title">
            Frequently Asked Questions
          </h2>
          <div className="aspect-video w-full"></div>
        </div>
      </section>
    </main>
  );
}
