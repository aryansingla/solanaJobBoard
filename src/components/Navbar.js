import React from "react";
import { Link } from "react-router-dom";
import BountyImg from "../assets/images/Bounty_logo.png";
function Navbar() {
  return (
    <div className="flex justify-between h-14 pt-3 pl-2 pr-2 font-semibold text-white bg-[#AF69EE]">
      <div className="">
        <Link>
          <img
            src={BountyImg}
            alt="logo"
            style={{ width: "25%", marginTop: "-16px" }}
          />
        </Link>
      </div>
      <div className="mid">
        <ul className="flex">
          <Link>
            <li className="px-10 hover:text-black">Home</li>
          </Link>
          <Link>
            {" "}
            <li className="px-10 hover:text-black">Employer</li>
          </Link>
          <Link>
            {" "}
            <li className="px-10 hover:text-black">Candidate</li>
          </Link>
        </ul>
      </div>
      <div className="flex w-18 right">
        <Link>
          <div className="pr-10 hover:text-black">Login</div>
        </Link>

        <button className=" w-28 rounded-full mb-2 -mt-1 hover:bg-opacity-80 bg-[#EF5DA8]">
          <Link>Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
