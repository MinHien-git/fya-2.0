export default function AgencyPageIntroduction() {
  return (
    <main className="w-full min-h-80 py-2 pt-0">
      <section className="w-full border-2 max-w-7xl mb-5 pb-5 rounded-b-3xl md:mx-auto min-h-[40vh] bg-primary px-3 flex items-center">
        <div className="grid gap-3 px-2 py-5 h-full">
          <h1 className="text-2xl sm:text-4xl font-bold text-white text-center">
            Differentiate yourself with{" "}
            <span className="text-secondary">Fya's</span> free{" "}
            <span className="text-secondary">Agency Page</span>
          </h1>
          <button className="bg-secondary text-text font-bold text-xs rounded-lg px-8 py-3 mx-auto md:mx-2 mt-2 sm:mt-5">
            Create your free Agency Page now!
          </button>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl mb-5 pb-5 rounded-3xl md:mx-auto min-h-[40vh] px-3 mt-[-2rem] bg-white">
        <div className="flex gap-3 px-2 py-5 h-full flex-col">
          <div className="flex flex-col gap-3 items-center">
            <div className="bg-tertiary w-full h-[10rem] rounded-2xl relative">
              <div className="bg-primary aspect-square w-[6rem] absolute rounded-full bottom-[-3rem] left-1/2 transform -translate-x-1/2"></div>
            </div>
            <h2 className="font-bold mt-10">Your Agency</h2>
            <p className="border-2 rounded-2xl px-2 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              cum et fuga quis ratione autem voluptatem molestias quos,
              reiciendis exercitationem ab dolorum obcaecati accusamus, corporis
              delectus. Labore, error nobis illo numquam ipsum veritatis fugit
              aut, quasi accusantium corporis beatae distinctio corrupti
              assumenda quisquam amet et.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
              <h5 className="font-semibold">Services</h5>
              <ul className="flex gap-1">
                <li className="bg-secondary w-4 aspect-square rounded-full"></li>
                <li className="bg-secondary w-4 aspect-square rounded-full"></li>
                <li className="bg-secondary w-4 aspect-square rounded-full"></li>
                <li className="bg-secondary w-4 aspect-square rounded-full"></li>
                <li className="bg-secondary w-4 aspect-square rounded-full"></li>
              </ul>
              <p className="font-semibold text-sm">5.0/5.0</p>
            </div>

            <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
              <h5 className="font-semibold">Portfolio</h5>
            </div>
            <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
              <h5 className="font-semibold">Awards</h5>
            </div>
            <div className="flex items-center justify-between w-full bg-gray-100 px-2 py-4 rounded-lg">
              <h5 className="font-semibold">Reviews & Feedback</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center">
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

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center">
            Establish your agency appearance on Fya{" "}
          </h2>
          <p className="text-secondary text-xl font-bold text-center">
            {" "}
            in 3 simple steps:
          </p>
        </div>
        <div className="py-5 w-11/12 md:w-full grid gap-5">
          <div className="bg-tertiary w-full h-10 rounded-3xl relative">
            <div className="absolute h-12 rounded-full aspect-square bg-primary flex justify-center items-center top-1/2 -translate-y-1/2 text-white font-bold">
              1
            </div>
          </div>
          <div className="bg-secondary w-8 aspect-square rounded-full justify-self-center"></div>
          <div className="bg-tertiary w-full h-10 rounded-3xl relative">
            <div className="absolute h-12 rounded-full aspect-square bg-primary flex justify-center items-center top-1/2 -translate-y-1/2 text-white font-bold right-0">
              2
            </div>
          </div>
          <div className="bg-secondary w-8 aspect-square rounded-full justify-self-center"></div>
          <div className="bg-tertiary w-full h-10 rounded-3xl relative">
            <div className="absolute h-12 rounded-full aspect-square bg-primary flex justify-center items-center top-1/2 -translate-y-1/2 text-white font-bold">
              3
            </div>
          </div>

          <button className="bg-primary text-white font-bold text-xs rounded-lg px-8 py-3 mx-auto md:mx-2 mt-2 sm:mt-5">
            Create your free Agency Page
          </button>
        </div>
      </section>

      <section className="w-full border-2 max-w-7xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center relative bg-light_yellow">
        <div className="bg-primary w-12 rounded-full absolute left-1/2 -translate-x-1/2 aspect-square top-[-1.5rem]"></div>
        <div className="py-5 w-11/12 md:w-full">
          <h2 className="text-2xl py-2 font-bold text-center">
            Upgrade your revenue stream with{" "}
            <span className="text-secondary">FyaPro.</span>
          </h2>
          <p className="text-text text-center">
            Advanced features starting at $30.99 monthly. Pay flexibly.
          </p>
        </div>
        <div className="py-5 w-11/12 md:w-full grid gap-5"></div>
      </section>
    </main>
  );
}
