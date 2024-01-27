export default function SecondaryNavigationBar() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-[4rem] border-b-2">
        <p className="font-title">Your Page</p>
      </div>
      <ul className="flex justify-center items-center h-[4rem] border-b-2 w-full">
        <li className="w-[16.66%] text-center border-r-2">About</li>
        <li className="w-[16.66%] text-center border-r-2">Services</li>
        <li className="w-[16.66%] text-center border-r-2">Company</li>
        <li className="w-[16.66%] text-center border-r-2">Portfolio</li>
        <li className="w-[16.66%] text-center border-r-2">Awards</li>
        <li className="w-[16.66%] text-center border-r-2">Reviews</li>
        <li className="w-[16.66%] text-center">Contact</li>
      </ul>
    </div>
  );
}
