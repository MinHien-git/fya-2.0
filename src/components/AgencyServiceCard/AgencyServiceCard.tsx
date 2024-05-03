interface IService {
  price: number;
  name: String;
  skill_tags: Array<string>;
}

export default function AgencyServiceCard({
  price,
  name,
  skill_tags,
}: IService) {
  return (
    <li className="grid w-full items-center relative">
      <div className="flex w-full items-center md:gap-2 relative border-[1px] shadow-lg shadow-primary/50 rounded-xl bg-white drop-shadow-md ">
        <div className="w-1/3 border-r-2 py-2 my-2 lg:py-4 lg:my-4 ">
          <h3 className="text-xs md:text-lg font-bold sm:pl-2 md:pl-5 text-center md:text-left">
            {name}
          </h3>
        </div>
        <div className="w-1/3 border-r-2 py-2 my-2 lg:py-4 lg:my-4">
          <ul className="flex mt-1 gap-1 md:gap-2 justify-center items-center">
            <li className="bg-secondary w-2 md:w-4 aspect-square rounded-full"></li>
            <li className="bg-secondary w-2 md:w-4 aspect-square rounded-full"></li>
            <li className="bg-secondary w-2 md:w-4 aspect-square rounded-full"></li>
            <li className="bg-secondary w-2 md:w-4 aspect-square rounded-full"></li>
            <li className="bg-secondary w-2 md:w-4 aspect-square rounded-full"></li>
            <li className="hidden md:block ml-5 font-bold">0.0/5.0</li>
          </ul>
        </div>
        <div className="w-1/3 py-2 my-2 lg:py-4 lg:my-4">
          <p className="text-xs md:text-base font-bold pl-2 md:pl-5">
            $ {price}
          </p>
        </div>
      </div>
      <ul
        className="w-1/3 bottom-[-2rem]
    border-l-[1px] border-r-[1px] border-b-[1px] rounded-b-lg flex flex-wrap gap-2 px-2 py-4 border-dashed border-text"
      >
        {skill_tags?.map((i) => (
          <li className="bg-secondary font-semibold text-xs md:text-sm px-2 py-1 rounded-md">
            {i}
          </li>
        ))}
      </ul>
    </li>
  );
}
