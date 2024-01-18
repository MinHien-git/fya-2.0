export default function Home() {
  return (
    <main className="w-full min-h-80 p-2">
      <section className="w-full border-2 max-w-7xl py-5 px-8 sm:px-12 lg:px-16 my-5 rounded-xl md:mx-auto h-auto md:flex md:gap-2 md:px-4 lg:items-center lg:justify-between">
        <div className="py-5 md:w-3/5 lg:w-2/5 lg:h-1/2">
          <h1 className="text-4xl pb-2 font-bold text-primary lg:text-5xl">
            Find
            <span className="text-secondary"> Your Ideal</span> Agencies
          </h1>
          <p className="font-semibold pt-2 text-primary opacity-55">
            Through personalized recommendation, made from the description of
            your needs, with the helps from AI
          </p>

          <div className="sm:flex items-center px-0 rounded-lg mx-auto pt-3 pb-2 flex-wrap">
            <select
              id="Com"
              title="Com"
              className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-s-xl w-1/2 md:w-1/3"
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
              className="text-base text-gray-400 py-2 border-2 flex-grow outline-none px-2 mx-0  sm:mr-2 rounded-e-xl w-1/2 md:w-1/3"
              type="text"
              placeholder="Location"
            />
            <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2 lg:mt-0">
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
        <div className="hidden md:inline-block md:w-2/5 lg:w-2/5 lg:aspect-square">
          <div className="bg-tertiary w-full h-full rounded-lg"></div>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-xl md:mx-auto">
        <div className="py-5">
          <h2 className="text-2xl py-2 font-bold text-center">
            Agencies of the week
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full">
            <div className="font-sans w-10/12 flex border-2 rounded-xl ">
              <div className="card mx-auto bg-white flex-col py-4 flex items-center gap-2">
                <img
                  className="w-28 mx-auto rounded-full border-8 border-white mb-2"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                  <h5 className="text-center text-md font-medium">
                    Agency Name
                  </h5>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl.
                    Nullam ut lacus porttitor, vestibulum ipsum eu, porta
                    libero. Aliquam erat volutpat. Morbi ac tincidunt orci.
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
              </div>
            </div>
            <div className="font-sans w-10/12 flex border-2 rounded-xl ">
              <div className="card mx-auto bg-white flex-col py-4 flex items-center gap-2">
                <img
                  className="w-28 mx-auto rounded-full border-8 border-white mb-2"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                  <h5 className="text-center text-md font-medium">
                    Agency Name
                  </h5>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl.
                    Nullam ut lacus porttitor, vestibulum ipsum eu, porta
                    libero. Aliquam erat volutpat. Morbi ac tincidunt orci.
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
              </div>
            </div>
            <div className="font-sans w-10/12 flex border-2 rounded-xl ">
              <div className="card mx-auto bg-white flex-col py-4 flex items-center gap-2">
                <img
                  className="w-28 mx-auto rounded-full border-8 border-white mb-2"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="flex flex-col py-5 border-2 rounded-md w-5/6 justify-center ">
                  <h5 className="text-center text-md font-medium">
                    Agency Name
                  </h5>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl.
                    Nullam ut lacus porttitor, vestibulum ipsum eu, porta
                    libero. Aliquam erat volutpat. Morbi ac tincidunt orci.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto h-80 flex">
        <div className="h-2/4 flex justify-center items-center w-100 border-2 w-4/5 mx-auto my-auto rounded-xl">
          <p className="text-3xl font-bold text-primary">Your ad here</p>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-xl md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-10/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center">
            What We can Do For{" "}
            <span className="text-secondary"> You & Your Business</span>
          </h2>
          <p className="text-text text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            sapien eu ipsum ornare{" "}
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 my-5 md:mx-auto grid">
        <h2 className="text-2xl py-2 font-bold text-center">
          Let us join your business journey!
        </h2>
        <div className="flex items-center gap-1 justify-center">
          <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Search Agencies
          </button>
          <p>Or</p>
          <button className="text-primary bg-tertiary text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Post your Project now!
          </button>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-xl md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-10/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center">
            Join the community of agencies
          </h2>
          <p className="text-text text-center">
            if you are a small agencies and wanna grow your business larger?
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                className="w-full mt-auto justify-center inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Learn more
              </a>
            </div>
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
        <h2 className="text-2xl py-2 font-bold text-center">
          Let us grow with your agency business
        </h2>
        <div className="flex items-center gap-1 justify-center">
          <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Search Agencies
          </button>
          <p>Or</p>
          <button className="text-primary bg-tertiary text-xs rounded-lg px-6 py-3 font-semibold mt-2">
            Post your Project now!
          </button>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-xl md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-10/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center">
            Join the community of agencies
          </h2>
          <p className="text-text text-center">
            if you are a small agencies and wanna grow your business larger?
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="bg-tertiary flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-11/12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 bg-secondary border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-11/12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <div className="bg-tertiary flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-11/12 bg-slate-200 aspect-square self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
