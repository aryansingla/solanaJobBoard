import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between h-14 pt-3 pl-2 pr-2 font-semibold text-white bg-[#AF69EE]">
      <div className="">logo</div>
      <div className="mid">
        <ul className="flex">
          <Link>
            <li className="px-10">Home</li>
          </Link>
          <Link>
            {" "}
            <li className="px-10">Employer</li>
          </Link>
          <Link>
            {" "}
            <li className="px-10">Candidate</li>
          </Link>
        </ul>
      </div>
      <div className="flex w-18 right">
        <Link>
          <div className="pr-10 ">Login</div>
        </Link>

        <button className=" w-28 rounded-full mb-2 -mt-1 hover:bg-opacity-80 bg-[#EF5DA8]">
          <Link>Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
