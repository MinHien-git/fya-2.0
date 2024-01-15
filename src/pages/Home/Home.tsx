export default function Home() {
  return (
    <main className="w-full min-h-80">
      <section className="border-2 max-w-7xl py-5 px-8 sm:px-12 lg:px-16 my-5 rounded-xl mx-4 md:mx-auto">
        <div className="py-5">
          <h1 className="text-4xl  pb-2 font-bold text-primary">
            Find
            <span className="text-secondary">
              {" "}
              Your Marketing PR & Event
            </span>{" "}
            Agencies
          </h1>
          <p className="font-semibold pt-2 text-primary opacity-55">
            Through personalized recommendation, made from the description of
            your needs, with the helps from AI
          </p>

          <div className="sm:flex items-center px-0 rounded-lg mx-auto pt-3 pb-2">
            <select
              id="Com"
              title="Com"
              className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-s-xl w-1/2"
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
              className="text-base text-gray-400 py-2 border-2 flex-grow outline-none px-2 mx-0  sm:mr-2 rounded-e-xl w-1/2"
              type="text"
              placeholder="Location"
            />
            <button className="bg-primary text-white text-xs rounded-lg px-6 py-3 font-semibold mt-2">
              Search Agencies
            </button>
          </div>

          <p className="mx-2 font-semibold my-2">or</p>
          <button className="bg-secondary text-white text-xs rounded-lg px-6 py-3 font-semibold mx-auto">
            Post your Project
          </button>
        </div>
        <div></div>
      </section>

      <section className="border-2 max-w-7xl px-2 sm:px-4 lg:px-8 my-5 rounded-xl mx-4 md:mx-auto">
        <div className="py-5">
          <h2 className="text-2xl py-2 font-bold text-center">
            Agencies of the week
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4">
            <div className="bg-gray-200 font-sans w-10/12 flex border-2 rounded-xl">
              <div className="card mx-auto bg-white py-4">
                <img
                  className="w-32 mx-auto rounded-full border-8 border-white"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="text-center mt-2 text-3xl font-medium">
                  Ajo Alex
                </div>
                <div className="text-center mt-2 font-light text-sm">
                  @devpenzil
                </div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                  <p>
                    Front end Developer, avid reader. Love to take a long walk,
                    swim
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">1.8 k</span> Followers
                  </div>
                  <div className="w-0 border border-gray-300"></div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">2.0 k</span> Following
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 font-sans w-10/12 flex border-2 rounded-xl ">
              <div className="card mx-auto bg-white py-4 flex-wrap">
                <img
                  className="w-32 mx-auto rounded-full border-8 border-white"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="text-center mt-2 text-3xl font-medium">
                  Ajo Alex
                </div>
                <div className="text-center mt-2 font-light text-sm">
                  @devpenzil
                </div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                  <p>
                    Front end Developer, avid reader. Love to take a long walk,
                    swim
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">1.8 k</span> Followers
                  </div>
                  <div className="w-0 border border-gray-300"></div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">2.0 k</span> Following
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 font-sans w-10/12 flex border-2 rounded-xl">
              <div className="card mx-auto bg-white py-4">
                <img
                  className="w-32 mx-auto rounded-full border-8 border-white"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="text-center mt-2 text-3xl font-medium">
                  Ajo Alex
                </div>
                <div className="text-center mt-2 font-light text-sm">
                  @devpenzil
                </div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                  <p>
                    Front end Developer, avid reader. Love to take a long walk,
                    swim
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">1.8 k</span> Followers
                  </div>
                  <div className="w-0 border border-gray-300"></div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">2.0 k</span> Following
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-2 max-w-7xl px-2 sm:px-4 lg:px-8 my-5 rounded-xl mx-4 md:mx-auto">
        <div className="py-5">
          <h2 className="text-2xl py-2 font-bold text-center">
            What We can Do For{" "}
            <span className="text-secondary"> You & Your Business</span>
          </h2>
          <div className="flex justify-center mt-5 flex-wrap gap-4">
            <div className="bg-gray-200 font-sans w-10/12 flex border-2 rounded-xl">
              <div className="card mx-auto bg-white py-4">
                <img
                  className="w-32 mx-auto rounded-full border-8 border-white"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="text-center mt-2 text-3xl font-medium">
                  Ajo Alex
                </div>
                <div className="text-center mt-2 font-light text-sm">
                  @devpenzil
                </div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                  <p>
                    Front end Developer, avid reader. Love to take a long walk,
                    swim
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">1.8 k</span> Followers
                  </div>
                  <div className="w-0 border border-gray-300"></div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">2.0 k</span> Following
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 font-sans w-10/12 flex border-2 rounded-xl ">
              <div className="card mx-auto bg-white py-4 flex-wrap">
                <img
                  className="w-32 mx-auto rounded-full border-8 border-white"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="text-center mt-2 text-3xl font-medium">
                  Ajo Alex
                </div>
                <div className="text-center mt-2 font-light text-sm">
                  @devpenzil
                </div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                  <p>
                    Front end Developer, avid reader. Love to take a long walk,
                    swim
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">1.8 k</span> Followers
                  </div>
                  <div className="w-0 border border-gray-300"></div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">2.0 k</span> Following
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 font-sans w-10/12 flex border-2 rounded-xl">
              <div className="card mx-auto bg-white py-4">
                <img
                  className="w-32 mx-auto rounded-full border-8 border-white"
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  alt=""
                />
                <div className="text-center mt-2 text-3xl font-medium">
                  Ajo Alex
                </div>
                <div className="text-center mt-2 font-light text-sm">
                  @devpenzil
                </div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                  <p>
                    Front end Developer, avid reader. Love to take a long walk,
                    swim
                  </p>
                </div>
                <hr className="mt-8" />
                <div className="flex p-4">
                  <div className="w-1/2 text-center">
                    <span className="font-bold">1.8 k</span> Followers
                  </div>
                  <div className="w-0 border border-gray-300"></div>
                  <div className="w-1/2 text-center">
                    <span className="font-bold">2.0 k</span> Following
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
