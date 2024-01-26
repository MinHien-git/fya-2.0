export default function BrandPage() {
  return (
    <main className="w-full min-h-80 p-2">
      <section className="w-full border-2 max-w-7xl my-5 rounded-xl md:mx-auto h-[40vh] bg-gray-200 flex aspect-[4/1]">
        <div className="flex items-center w-full border-t-2 border-gray-300 h-[3rem] mt-auto relative md:h-">
          <div className="w-[6rem] aspect-square bg-gray-500 rounded-full absolute top-[-3.5rem] left-[1.5rem] h-auto md:w-[8rem] md:top-[-3rem]"></div>
          <h1 className="pl-[8rem] text-md font-bold md:hidden">
            [Brand Name Brand Name]
          </h1>

          <ul className="justify-center w-full hidden md:flex gap-4">
            <li>About</li>
            <li>
              <hr className="h-full w-[2px] bg-slate-500" />
            </li>
            <li>Portfolio</li>
            <li>
              <hr className="h-full w-[2px] bg-slate-500" />
            </li>
            <li>Awards</li>
            <li>
              <hr className="h-full w-[2px] bg-slate-500" />
            </li>
            <li>Reviews</li>
          </ul>
        </div>
      </section>
      <section className="w-full max-w-7xl my-5 md:mx-auto flex md:hidden">
        <ul className="flex justify-around w-full">
          <li>About</li>
          <li>Portfolio</li>
          <li>Awards</li>
          <li>Reviews</li>
        </ul>
      </section>
      <section className="w-full max-w-7xl my-5 md:mx-auto grid md:flex lg:gap-4">
        <div className="grid gap-3 px-2 md:mt-5 content-baseline lg:w-3/6 lg:ml-6 lg:gap-5">
          <h1 className="text-md font-bold hidden md:block text-xl lg:text-2xl">
            [Brand Name Brand Name]
          </h1>
          <p className="text-text font-semibold text-sm lg:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus
            porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat.
            Morbi ac tincidunt orci.
          </p>
          <button className="bg-secondary w-4/6 rounded-md text-xs h-[2.125rem] font-semibold lg:w-[12rem] mt-2">
            Open website
          </button>
        </div>
        <section className="w-full max-w-7xl my-5 md:mx-auto flex lg:w-3/6">
          <div className="grid gap-3 px-2 lg:grid lg:grid-cols-2">
            <div className="w-full border-2 max-w-7xl px-4 sm:px-4 lg:px-8 py-5 rounded-xl md:mx-auto grid gap-3 lg:col-start-2">
              <p>Based in: ABC City</p>
              <p>Available: Nationwide</p>
            </div>
            <div className="w-full border-2 max-w-7xl px-4 sm:px-4 lg:px-8 py-8 rounded-xl md:mx-auto grid gap-3 lg:content-baseline lg:gap-6">
              <ul className="flex mt-1 gap-2 items-center justify-center">
                <li className="bg-secondary w-6 aspect-square rounded-full"></li>
                <li className="bg-secondary w-6 aspect-square rounded-full"></li>
                <li className="bg-secondary w-6 aspect-square rounded-full"></li>
                <li className="bg-secondary w-6 aspect-square rounded-full"></li>
                <li className="bg-secondary w-6 aspect-square rounded-full"></li>
              </ul>
              <p className="text-center font-bold">0.0/5.0</p>
              <p>
                (no review yet) Have You worked with [Brand Name] Before?{" "}
                <span className="text-blue-500 underline"> Review Here</span>
              </p>
            </div>
            <div className="w-full border-2 max-w-7xl px-4 sm:px-4 lg:px-8 py-8 rounded-xl md:mx-auto grid gap-3 lg:content-baseline lg:gap-6">
              <p>Team: 123 people </p>
              <p>Founded in: 2023</p>
              <p>Language(s) available: English, Vietnamese</p>
              <p>Has joined Fya since: 2023</p>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-40 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center relative">
        <div className="py-5">
          <h2 className="text-2xl py-2 font-bold text-center font-title">
            Agencies working with [Brand Name]
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4 md:flex-nowrap md:w-full">
            <div className="font-sans w-10/12 flex border-2 rounded-2xl sm:w-2/5 bg-white">
              <div className="card mx-auto flex-col py-4 flex items-center gap-2">
                <img
                  className="w-20 mx-auto rounded-full border-8 border-white"
                  src="/static/images/profile.png"
                  alt=""
                />
                <div className="flex flex-col py-2 border-2 rounded-md w-5/6 justify-center ">
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

                <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl.
                    Nullam ut lacus porttitor, vestibulum ipsum eu, porta
                    libero. Aliquam erat volutpat. Morbi ac tincidunt orci.
                  </p>
                </div>

                <div className="flex w-5/6 gap-1 my-2">
                  <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                    Contact
                  </button>
                  <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
                </div>
              </div>
            </div>
            <div className="font-sans w-10/12 flex border-2 rounded-2xl sm:w-2/5 bg-white">
              <div className="card mx-auto flex-col py-4 flex items-center gap-2">
                <img
                  className="w-20 mx-auto rounded-full border-8 border-white"
                  src="/static/images/profile.png"
                  alt=""
                />
                <div className="flex flex-col py-2 border-2 rounded-md w-5/6 justify-center ">
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

                <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl.
                    Nullam ut lacus porttitor, vestibulum ipsum eu, porta
                    libero. Aliquam erat volutpat. Morbi ac tincidunt orci.
                  </p>
                </div>

                <div className="flex w-5/6 gap-1 my-2">
                  <button className="bg-secondary w-5/6 font-semibold rounded-md text-xs">
                    Contact
                  </button>
                  <button className="bg-slate-200 w-1/6 aspect-square rounded-md"></button>
                </div>
              </div>
            </div>
            <div className="font-sans w-10/12 flex border-2 rounded-2xl sm:w-2/5 bg-white">
              <div className="card mx-auto flex-col py-4 flex items-center gap-2">
                <img
                  className="w-20 mx-auto rounded-full border-8 border-white"
                  src="/static/images/profile.png"
                  alt=""
                />
                <div className="flex flex-col py-2 border-2 rounded-md w-5/6 justify-center ">
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

                <div className="border-2 rounded-md font-normal text-xs w-5/6 mt-2 py-3 px-2 text-text md:max-h-[5rem] overflow-hidden">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl.
                    Nullam ut lacus porttitor, vestibulum ipsum eu, porta
                    libero. Aliquam erat volutpat. Morbi ac tincidunt orci.
                  </p>
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
        <div className="absolute w-full left-0 h-full flex items-center justify-between md:relative lg:absolute md:py-2 lg:px-10 -z-10">
          <img
            src="/static/images/arrowleft.png"
            alt="left arrow"
            className="w-6 md:w-10"
          />
          <img
            src="/static/images/arrowright.png"
            alt="right arrow"
            className="w-6 md:w-10"
          />
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-40 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center relative">
        <div className="py-5 w-10/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center font-title">
            Brand Name's Agency projects
          </h2>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
              </ul>
            </div>

            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
              </ul>
            </div>

            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute w-full left-0 h-full flex items-center justify-between md:relative lg:absolute lg:px-10 md:py-2 -z-10">
          <img
            src="/static/images/arrowleft.png"
            alt="left arrow"
            className="w-6 md:w-10"
          />
          <img
            src="/static/images/arrowright.png"
            alt="right arrow"
            className="w-6 md:w-10"
          />
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-40 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center relative">
        <div className="py-5 w-10/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center font-title">
            Awards
          </h2>

          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
              </ul>
            </div>

            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
              </ul>
            </div>

            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>
              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum ornare sollicitudin vel nec nisl.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
                <li className="bg-gray-300 w-2/5 h-5 rounded-xl"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute w-full left-0 h-full flex items-center justify-between md:relative lg:absolute lg:px-10 md:py-2 -z-10">
          <img
            src="/static/images/arrowleft.png"
            alt="left arrow"
            className="w-6 md:w-10"
          />
          <img
            src="/static/images/arrowright.png"
            alt="right arrow"
            className="w-6 md:w-10"
          />
        </div>
      </section>

      <section className="w-full border-[1px] border-border bg-light_gray max-w-7xl px-2 sm:px-4 lg:px-40 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center relative">
        <div className="py-5 w-10/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center font-title">
            Reviews & Feedback
          </h2>
          <p className="text-text text-center">
            if you are a small agencies and wanna grow your business larger?
          </p>
          <div className="flex flex-wrap mt-4 gap-4 md:flex-nowrap">
            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <ul className="flex flex-wrap gap-2 items-center">
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="ml-auto">0.0/5.0</li>
              </ul>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>

              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum.
              </p>
            </div>

            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <ul className="flex flex-wrap gap-2 items-center">
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="ml-auto">0.0/5.0</li>
              </ul>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>

              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum.
              </p>
            </div>

            <div className="flex flex-col h-auto sm:h-[32rem] md:h-auto w-full p-4 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3">
              <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4"></div>
              <ul className="flex flex-wrap gap-2 items-center">
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="bg-secondary w-[0.75rem] aspect-square rounded-xl"></li>
                <li className="ml-auto">0.0/5.0</li>
              </ul>
              <a href="/#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet
                </h5>
              </a>

              <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                at sapien eu ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-full left-0 h-full flex items-center justify-between md:relative lg:absolute lg:px-10 md:py-2 -z-10">
          <img
            src="/static/images/arrowleft.png"
            alt="left arrow"
            className="w-6 md:w-10"
          />
          <img
            src="/static/images/arrowright.png"
            alt="right arrow"
            className="w-6 md:w-10"
          />
        </div>
      </section>
    </main>
  );
}
