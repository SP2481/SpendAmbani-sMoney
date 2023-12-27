/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import mukeshBhau from "../assets/images/mukesh-ambani.jpg";

function Navbar() {
  const { remaining_bal } = useSelector((state) => state.items.cart);

  return (
    <>
      <nav className="w-full h-24 flex justify-center gap-8 items-center font-opensans bg-gray-600 text-white fixed top-0 ">
        <img src={mukeshBhau} alt="mukeshbhau" className="w-20 h-20 ml-2" />
        <div className="">
          <h1 className=" text-xl sm:text-4xl text-center mb-1 md:mb-4 mt-2">
            SpendAmbani'sfortune
          </h1>
          <h2 className="font-medium text-center mb-4 text-lg md:text-3xl">
            Remaining Total :- {remaining_bal.toLocaleString()}
          </h2>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
