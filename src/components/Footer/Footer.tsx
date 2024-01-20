export default function Footer() {
  return (
    <footer className="w-full bg-tertiary border-2 max-w-7xl py-5 px-8 sm:px-12 lg:px-16 my-5 rounded-[3rem] md:mx-auto mb-10">
      <div className="pt-5 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:justify-around">
          <div className="grid gap-3 lg:w-1/2">
            <img
              src={"/static/images/Logo_BG.svg"}
              alt="logo"
              className="w-[4rem] mb-6"
            />
            <h2 className="text-primary text-2xl font-bold">
              Find <span className="text-secondary">Your</span> Agencies
            </h2>
            <p className="text-primary font-semibold">
              Our answer to the growing needs for a reliable, effective
              connection between SMEs/Startups and Agencies.{" "}
            </p>
            <ul className="flex gap-2 items-center py-2">
              <li className="aspect-square w-1/5 bg-gray-200 rounded-full max-w-12"></li>
              <li className="aspect-square w-1/5 bg-gray-200 rounded-full max-w-12"></li>
              <li className="aspect-square w-1/5 bg-gray-200 rounded-full max-w-12"></li>
              <li className="aspect-square w-1/5 bg-gray-200 rounded-full max-w-12"></li>
              <li className="aspect-square w-1/5 bg-gray-200 rounded-full max-w-12"></li>
            </ul>
            <h5 className="font-semibold">
              2023 © Fya - All rights reserved - Terms of Use - Privacy Policy
            </h5>
          </div>
          <hr className="my-8 bg-gray-500 lg:w-[2px] lg:h-[12rem]" />
          <div className="flex flex-wrap gap-3 justify-between lg:w-1/2 md:ml-12">
            <div className="w-2/5 md:w-1/5 lg:pl-5">
              <p className="font-semibold pb-2">Company</p>
              <ul>
                <li className="text-text">About</li>
                <li className="text-text">Contact</li>
              </ul>
            </div>

            <div className="w-2/5 md:w-1/5 lg:pl-5">
              <p className="font-semibold pb-2">Brands</p>
              <ul>
                <li className="text-text">Post Project</li>
                <li className="text-text">Find Agencies</li>
              </ul>
            </div>

            <div className="w-2/5 md:w-1/5 lg:pl-5">
              <p className="font-semibold pb-2">Agencies</p>
              <ul>
                <li className="text-text">Get Listed</li>
                <li className="text-text">Agency Page</li>
                <li className="text-text">FyaPro</li>
                <li className="text-text">Learn More</li>
              </ul>
            </div>

            <div className="w-2/5 md:w-1/5 lg:pl-5">
              <p className="font-semibold pb-2">Careers</p>
              <ul>
                <li className="text-text">Jobs At Fya</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
