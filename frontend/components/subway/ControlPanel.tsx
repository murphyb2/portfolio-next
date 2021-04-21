import React, { useEffect, useState } from "react";
import Button from "../Button";
import Incrementer from "../Incrementer";
import MultiToggle from "../MultiToggle";
import Toggle from "../Toggle";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
const ControlPanel = ({
  viewportState,
  year,
  setYear,
  setMonthly,
  monthly,
  month,
  setDataMonth,
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`fixed ${
        visible
          ? "top-0 right-0 max-w-xs bg-gray-100 m-3 p-3"
          : "top-0 left-0 right-0"
      }`}
    >
      {visible && (
        <>
          <div
            className="cursor-pointer absolute top-0 right-0 p-2 px-3"
            onClick={() => setVisible(false)}
          >
            hide
          </div>
          <h1 className="font-bold">View Settings</h1>
          <ul>
            <li>Latitude: {viewportState.latitude}</li>
            <li>Longitude: {viewportState.longitude}</li>
            <li>Pitch: {viewportState.pitch}</li>
            <li>Zoom: {viewportState.zoom}</li>
            <li>Bearing: {viewportState.bearing}</li>
          </ul>
          <hr className="border-1 my-3" />
          <Toggle
            checked={monthly}
            handleToggle={setMonthly}
            label="Monthly?"
          />
          {monthly && (
            <Incrementer
              nextLabel={"Next"}
              prevLabel={"Previous"}
              value={months[month]}
              handleDecrement={() => setDataMonth(Math.max(1, month - 1))}
              handleIncrement={() => setDataMonth(Math.min(12, month + 1))}
              className="flex justify-between my-3"
            />
          )}
          <hr className="border-1 my-3" />
          <MultiToggle
            labels={["2021", "2020", "2019"]}
            handleSelectionChanged={setYear}
          />
          <hr className="border-1 my-3" />
          <div className="italic">
            <h3 className="font-bold">Legend</h3>
            <ul className="list-interpunct">
              <li>
                Column color represents the number of stations clustered
                together. More stations yields a more red color.
              </li>
              <li>
                Column height represents the number of entries into a station in
                the set time period. More entries yields taller column height.
              </li>
            </ul>
          </div>
        </>
      )}
      {!visible && (
        <div className="flex justify-between w-full">
          <div className="bg-gray-100 p-3">
            <div>{monthly ? `Month: ${months[month]}` : `Year: ${year}`}</div>
          </div>
          <div
            className="cursor-pointer bg-gray-100 p-3 mb-auto"
            onClick={() => setVisible(true)}
          >
            show controls
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
