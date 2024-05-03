interface IPortfolio {
  project_name: string;
  description: string;
  services: Array<String>;
  image: string;
}

export default function AgencyPortfolioCard({
  project_name,
  description,
  services,
  image,
}: IPortfolio) {
  return (
    <div className="flex flex-col h-auto sm:h-[32rem] bg-white md:h-auto w-full p-4 border bug-white border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 md:w-1/3 drop-shadow-md">
      <div className="w-full bg-tertiary aspect-[4/3] self-center justify-self-center rounded-md mb-4">
        <img
          src={image}
          alt="portfolio_image"
          className="w-full object-cover aspect-[4/3]"
        />
      </div>
      <a href="/#">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {project_name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2">
        {services.map((service) => (
          <li className="py-2 px-2 text-xs font-bold rounded-xl bg-primary text-white">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
