import React, { useEffect, useState } from "react";
import Button from "../Button";
import MultiToggle from "../MultiToggle";
import Toggle from "../Toggle";

const ControlPanel = ({ viewportState, setYear }) => {
  // const [layers, setLayers] = useState(initialLayers)
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(true);

  return (
    <div className={`fixed top-0 right-0 max-w-lg m-3 p-3 bg-gray-100`}>
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
            <li>Altitude: {viewportState.altitude}</li>
            <li>Bearing: {viewportState.bearing}</li>
            <li>Latitude: {viewportState.latitude}</li>
            <li>Longitude: {viewportState.longitude}</li>
            <li>Pitch: {viewportState.pitch}</li>
            <li>Zoom: {viewportState.zoom}</li>
          </ul>
          {/* <Toggle
            checked={checked}
            handleToggle={() => setChecked(!checked)}
            label="Test Layer"
          /> */}
          <MultiToggle
            labels={["2021", "2020", "2019"]}
            handleSelectionChanged={setYear}
          />
        </>
      )}
      {!visible && (
        <div className="cursor-pointer" onClick={() => setVisible(true)}>
          show controls
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
