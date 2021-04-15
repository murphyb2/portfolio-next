import { useState, useMemo } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const boroughs = {
  M: "Manhattan",
  Bk: "Brooklyn",
  Q: "Queens",
  Bx: "Bronx",
  SI: "Staten Island",
};
const Subway = ({ stations }) => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 40.757095,
    longitude: -73.966537,
    zoom: 12,
    width: "100vw",
    height: "100vh",
  });

  // Only rerender markers if props.data has changed
  const markers = useMemo(
    () =>
      stations.map((station) => (
        <Marker
          key={station.id}
          latitude={Number(station.gtfs_latitude)}
          longitude={Number(station.gtfs_longitude)}
        >
          <div
            onClick={() => {
              setSelectedStation({
                latitude: Number(station.gtfs_latitude),
                longitude: Number(station.gtfs_longitude),
                name: station.stop_name,
                division: station.division,
                line: station.line,
                borough: boroughs[station.borough],
                daytime_routes: station.daytime_routes,
                structure: station.structure,
                north: station.north_direction_label,
                south: station.south_direction_label,
              });
              setShowPopup(true);
            }}
            className="flex h-3 w-3 cursor-pointer"
          >
            <div className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></div>
          </div>
        </Marker>
      )),
    [stations]
  );

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {showPopup && (
        <Popup
          latitude={selectedStation.latitude}
          longitude={selectedStation.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="right"
          className="z-50"
        >
          <p className="text-2xl">{selectedStation.name}</p>
          <p>Daytime Routes: {selectedStation.daytime_routes}</p>
          <p>Division: {selectedStation.division}</p>
          <p>Line: {selectedStation.line}</p>
          <p>Borough: {selectedStation.borough}</p>
          <p>Structure: {selectedStation.structure}</p>
          <p>North Direction: {selectedStation.north}</p>
          <p>South Direction: {selectedStation.south}</p>
        </Popup>
      )}
      {markers}
    </ReactMapGL>
  );
};

export default Subway;

export const getStaticProps: GetStaticProps = async () => {
  const stations = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/stations`
  );

  return {
    props: {
      stations: stations.data,
    },
  };
};
