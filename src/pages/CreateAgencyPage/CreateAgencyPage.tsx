export default function CreateAgencyPage() {
  return (
    <main className="w-full min-h-80 py-2 pt-0">
      <section className="w-[95%] border-2 pb-5 max-w-4xl rounded-3xl md:mx-auto mt-5 min-h-[50vh] bg-light_blue px-3 flex items-center mx-auto">
        <div className="grid gap-3 px-2 py-5 h-full mx-auto">
          <h1 className="text-2xl sm:text-4xl font-bold text-white text-center lg:w-[30rem] font-header">
            Match with clients that fit,{" "}
            <span className="text-primary">with precision.</span>{" "}
          </h1>
          <button className="bg-primary text-white font-bold text-xs rounded-lg px-8 py-3 mx-auto mt-2 sm:mt-5 md:w-fit ">
            Subscribe to FyaPro now
          </button>
        </div>
      </section>
      <section className="w-full border-t-2 border-b-2 border-primary pb-5 rounded-3xl md:mx-auto mt-5 min-h-[50vh] px-3 flex flex-col items-center mx-auto">
        <article className="h-auto py-5 border-b-2 border-primary w-full md:h-[20rem] md:flex md:items-center md:justify-start">
          <div className="flex max-w-5xl mx-auto w-full">
            <div className="border-[1px] border-primary px-10 py-5 rounded-xl shadow-md w-full md:w-[25rem]">
              <h5 className="text-2xl font-title">
                <span className="text-secondary">Tailor-made</span>{" "}
                recommendation
              </h5>
              <p>
                Fya analyzes project brief description from clients to select
                projects that fit your agency’s professions & preferences.
              </p>
            </div>
          </div>
        </article>
        <article className="h-auto py-5 border-b-2 border-primary w-full md:h-[20rem] md:flex md:items-center md:justify-end">
          <div className="flex max-w-5xl mx-auto w-full md:items-center md:justify-end">
            <div className="border-[1px] border-primary px-10 py-5 rounded-xl shadow-md w-full md:w-[25rem]">
              <h5 className="text-2xl font-title">
                Partner with{" "}
                <span className="text-secondary">high-intent customers</span>
              </h5>
              <p>
                Secure your spot on our first page every week, be seen first by
                your potential customers!
              </p>
            </div>
          </div>
        </article>
        <article className="h-auto py-5 w-full md:h-[20rem] md:flex md:items-center md:justify-start">
          <div className="flex max-w-5xl mx-auto w-full">
            <div className="border-[1px] border-primary px-10 py-5 rounded-xl shadow-md w-full md:w-[25rem]">
              <h5 className="text-2xl font-title">
                Pay for it <span className="text-secondary">Flexibly</span>
              </h5>
              <p>
                Drive traffic efficiently and cost-effectively with FyaPro's CPC
                payment model. Only pay for the results. Start from $0.12/click.
              </p>
            </div>
          </div>
        </article>
      </section>
      <section className="w-full border-2 max-w-5xl px-2 sm:px-4 lg:px-12 my-5 rounded-[3rem] md:mx-auto flex flex-col justify-center items-center">
        <div className="py-5 w-11/12 md:w-full">
          <h2 className="md:text-xl lg:text-[2rem] py-2 font-bold text-center font-title">
            Frequently Asked Questions
          </h2>
          <div className="aspect-video w-full"></div>
        </div>
      </section>
      <section className="w-full max-w-5xl px-2 sm:px-4 lg:px-12 md:mx-auto flex flex-col justify-center items-center relative border-2 bg-dark_blue rounded-3xl">
        <div className="py-8 w-full mt-10 grid gap-1 pb-10">
          <h5 className="text-center md:text-xl lg:text-[2rem] font-title font-bold text-3xl text-white">
            Subscribe to FyaPro
          </h5>
          <p className="text-secondary text-sx text-center w-80 mx-auto">
            and upgrade your revenue stream with our Project Lead Extension!
          </p>

          <button className="bg-secondary text-text font-bold text-xs rounded-lg px-8 py-2 mx-auto mt-5 md:w-fit md:mx-auto">
            Subscribe to FyaPro now
          </button>
        </div>
      </section>
    </main>
  );
}
