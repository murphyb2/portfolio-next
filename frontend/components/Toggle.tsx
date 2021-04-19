import React from "react";

type Props = {
  label: string;
  checked: boolean;
  handleToggle: any;
  value: boolean;
};
const Toggle = ({ label, checked, handleToggle }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/*  label  */}
      <div className="ml-3 text-gray-700 font-medium">{label}</div>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        {/* toggle */}
        <div className="relative">
          {/*  input  */}
          <input
            checked={checked}
            onChange={handleToggle}
            type="checkbox"
            id="toggleB"
            className="sr-only"
          />
          {/*  line  */}
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          {/*  dot  */}
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
