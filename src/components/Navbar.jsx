import React from "react";
import InputUrl from "./subComponents/InputUrl";

const Navbar = ({ onApiUrlChange }) => {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <div className="flex gap-3 justify-center items-center">
        <img src="/earthquake.svg" alt="" className="w-9 h-9"/>
        <h1 className="text-lg font-semibold">Sismo Client</h1>
      </div>
      <ul className="flex gap-[40px] text-m">
        <li>
        <InputUrl onApiUrlChange={onApiUrlChange} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
