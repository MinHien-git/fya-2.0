import { Button } from "@material-tailwind/react";

export default function MatchMakingIntroduction() {
  return (
    <main className="w-full min-h-80 py-2 pt-0">
      <section className="w-full border-2 pb-5  rounded-b-3xl md:mx-auto min-h-[70vh] bg-light_blue px-3 flex items-center mx-auto">
        <div className="grid gap-3 px-2 py-5 h-full mx-auto">
          <div className="aspect-square bg-primary w-16 rounded-lg flex justify-center items-center mx-auto">
            <img src="/static/icons/projectLeads.png" alt="projectLeads" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold lg:text-[2.5rem] text-white text-center lg:w-[35rem] font-header">
            Match with clients that fit,{" "}
            <span className="text-primary block">with precision.</span>{" "}
          </h1>
          <Button
            size="lg"
            placeholder={undefined}
            className="bg-primary text-white font-bold text-xs mx-auto md:w-fit capitalize mt-4"
          >
            Subscribe to <span className="text-secondary">FyaPro </span>now
          </Button>
        </div>
      </section>
      <section className="w-full border-t-2 border-b-2 border-primary pb-5 rounded-3xl md:mx-auto mt-5 min-h-[50vh] px-3 flex flex-col items-center mx-auto">
        <article className="h-auto py-5 border-b-2 border-primary w-full md:h-[40rem] md:flex md:items-center md:justify-start">
          <div className="flex max-w-7xl mx-auto w-full">
            <div className="border-[1px] border-primary px-10 py-5 rounded-xl shadow-md w-full md:w-[25rem] lg:w-[40%] h-[10rem] grid place-content-center">
              <h5 className="text-2xl font-title mb-2">
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
        <article className="h-auto py-5 border-b-2 border-primary w-full md:h-[40rem] md:flex md:items-center md:justify-end">
          <div className="flex max-w-7xl mx-auto w-full md:items-center md:justify-end">
            <div className="border-[1px] border-primary px-10 py-5 rounded-xl shadow-md w-full md:w-[25rem] lg:w-[40%] h-[10rem] grid place-content-center">
              <h5 className="text-2xl font-title mb-2">
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
        <article className="h-auto py-5 w-full md:h-[40rem] md:flex md:items-center md:justify-start">
          <div className="flex max-w-7xl mx-auto w-full">
            <div className="border-[1px] border-primary px-10 py-5 rounded-xl shadow-md w-full md:w-[25rem] lg:w-[40%] h-[10rem] grid place-content-center">
              <h5 className="text-2xl font-title mb-2">
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
        <div className="py-8 w-full my-10 grid gap-1 pb-10">
          <h5 className="text-center md:text-xl lg:text-[2rem] font-title font-bold text-3xl text-white">
            Subscribe to FyaPro
          </h5>
          <p className="text-white text-sx text-center w-full mx-auto">
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
