import MediumCard from "../../components/MediumCard/MediumCard";

export default function Home() {
  return (
    <main className="w-full min-h-80 p-2">
      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl py-5 px-8 sm:px-  lg:px-16 my-5 rounded-[3rem] md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center md:justify-between">
        <div className="py-5 md:w-3/5 lg:w-3/5 lg:h-1/2">
          <h1 className="text-4xl pb-2 font-bold text-primary lg:text-5xl font-header">
            Find
            <span className="text-secondary"> Your Ideal</span> Agencies
          </h1>
          <p className="font-semibold pt-2 text-primary opacity-55">
            Through personalized recommendation, made from the description of
            your needs, with the helps from AI
          </p>

          <div className="sm:flex items-center px-0 rounded-lg mx-auto pt-3 pb-2 flex-wrap lg:flex-nowrap w-full">
            <select
              id="Com"
              title="Com"
              className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-s-xl w-1/3 md:w-1/3 max-w-[12rem]"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <option value="com" selected>
                Services
              </option>
              <option value="net">net</option>
              <option value="org">org</option>
              <option value="io">io</option>
            </select>
            <input
              className="text-base text-gray-400 py-2 border-2 flex-grow outline-none px-2 mx-0  sm:mr-2 rounded-e-xl w-1/2 md:w-1/3 max-w-[15rem]"
              type="text"
              placeholder="Location"
            />
            <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2 md:mt-0">
              Search Agencies
            </button>
          </div>
          <div className="md:flex">
            <p className="mx-2 my-2 font-light">or</p>
            <button className="bg-secondary text-white text-xs rounded-lg px-6 py-3 font-semibold mx-auto md:mx-2">
              Post your Project
            </button>
          </div>
        </div>
        <div className="hidden md:inline-block md:w-2/5 lg:w-2/5 aspect-square">
          <div className="flex w-full h-full items-center justify-center">
            <div className="bg-gray-200 w-1/12 h-3/5 rounded-l-lg"></div>
            <div className="bg-tertiary w-10/12 rounded-lg aspect-square max-h-full"></div>
            <div className="bg-gray-200 w-1/12  h-3/5 rounded-r-lg"></div>
          </div>
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto">
        <div className="py-5 pb-10">
          <h2 className="text-[2rem] py-2 font-bold text-center md:text-[2rem] font-title">
            Agencies of the week
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full max-w-5xl mx-auto">
            <MediumCard name="ABC Company" />
            <MediumCard name="BCD Company" />
            <MediumCard
              click={() => {
                console.log("Hello world");
              }}
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto h-60 flex">
        <div className="h-2/4 flex justify-center items-center w-100 border-2 w-4/5 mx-auto my-auto rounded-xl">
          <p className="text-3xl font-bold text-primary">Your ad here</p>
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-10/12 md:w-full max-w-5xl pb-10">
          <h2 className="text-[2rem] py-2 font-bold text-center font-title">
            What We can Do For{" "}
            <span className="text-secondary"> You & Your Business</span>
          </h2>
          <p className="text-text text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            sapien eu ipsum ornare{" "}
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto w-full p-6 bg-white border border-gray-200 rounded-2xl shadow md:w-1/3 aspect-[11/12] drop-shadow-md">
              <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/telescope.png" alt="telescope" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Find you an Agency that fit.
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
              <a
                href="/#"
                className="w-full mt-auto justify-center inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search agencies
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col h-auto w-full p-6 bg-secondary border border-gray-200 rounded-2xl shadow md:w-1/3 aspect-[11/12] drop-shadow-md">
              <div className="w-12 bg-white aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/goal.png" alt="goal" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Hit the spot with Post Your Project
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
              <a
                href="/#"
                className="w-full mt-auto justify-center inline-flex items-center px-3 py-2 text-xs font-medium text-center text-primary bg-white rounded-lg"
              >
                Post your Project now!
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col h-auto w-full p-6 bg-white border border-gray-200 rounded-2xl shadow md:w-1/3 aspect-[11/12] drop-shadow-md">
              <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/compass.png" alt="compass" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Direct Access to an Agency
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>

              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                    placeholder="Agency name"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto grid">
        <h2 className="text-[2rem] py-2 font-bold text-center font-title">
          Let us join your business journey!
        </h2>
        <div className="flex items-center gap-4 justify-center">
          <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Search Agencies
          </button>
          <p>or</p>
          <button className="text-primary bg-tertiary text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Post your Project now!
          </button>
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-10/12 md:w-full pb-10">
          <h2 className="text-[2rem] py-2 font-bold text-center font-title">
            Join the community of agencies
          </h2>
          <p className="text-text text-center">
            if you are a small agencies and wanna grow your business larger?
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap max-w-5xl mx-auto">
            <div className="flex flex-col h-auto w-full p-6 bg-white border border-gray-200 rounded-2xl shadow md:w-1/3 aspect-[11/12] drop-shadow-md">
              <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/flash.png" alt="flash" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Reach your potential customer
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
              <a
                href="/#"
                className="w-full mt-auto justify-center inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Your Profile
              </a>
            </div>
            <div className="flex flex-col h-auto w-full p-6 bg-secondary border border-gray-200 rounded-2xl shadow md:w-1/3 aspect-[11/12] drop-shadow-md">
              <div className="w-12 bg-white aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/bell.png" alt="bell" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Get notification for suitable project
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
              <a
                href="/#"
                className="w-full mt-auto justify-center inline-flex items-center px-3 py-2 text-xs font-medium text-center text-primary bg-white rounded-lg"
              >
                Learn more
              </a>
            </div>
            <div className="flex flex-col h-auto w-full p-6 bg-white border border-gray-200 rounded-2xl shadow md:w-1/3 aspect-[11/12] drop-shadow-md">
              <div className="w-12 bg-primary aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/power.png" alt="power" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Generate quality leads efficiently
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
              <a
                href="/#"
                className="w-full mt-auto justify-center inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join FyaPro today!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto grid">
        <h2 className="text-[2rem] py-2 font-bold text-center font-title">
          Let us grow with your agency business
        </h2>
        <div className="flex items-center gap-4 justify-center">
          <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Search Agencies
          </button>
          <p>or</p>
          <button className="text-primary bg-tertiary text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Post your Project now!
          </button>
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-10/12 md:w-full pb-10">
          <h2 className="text-[2rem] py-2 font-bold text-center font-title">
            Join the community of agencies
          </h2>
          <p className="text-text text-center">
            if you are a small agencies and wanna grow your business larger?
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap max-w-5xl mx-auto">
            <div className="bg-tertiary flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 border border-gray-200 rounded-2xl shadow md:w-1/3 drop-shadow-md">
              <div className="w-11/12 aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/investigator.png" alt="invest" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Reach your potential customer
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
            </div>
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-secondary border border-gray-200 rounded-2xl shadow md:w-1/3 drop-shadow-md">
              <div className="w-11/12 aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/Search-amico.png" alt="Search-amico" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Get notification for suitable project
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
            </div>
            <div className="bg-tertiary flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 border border-gray-200 rounded-2xl shadow md:w-1/3 drop-shadow-md">
              <div className="w-11/12 aspect-square self-center justify-self-center rounded-md mb-4 flex items-center justify-center">
                <img src="/static/images/investigator.png" alt="invest" />
              </div>
              <a href="/#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  Generate quality leads efficiently
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut
                lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat
                volutpat. Morbi ac tincidunt orci.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
