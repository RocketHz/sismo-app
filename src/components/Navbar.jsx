import React from "react";
import InputUrl from "./subComponents/InputUrl";

const Navbar = ({ onApiUrlChange }) => {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">Sismo App</h1>
      <ul className="flex gap-[40px] text-m">
        <li>
        <InputUrl onApiUrlChange={onApiUrlChange} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
