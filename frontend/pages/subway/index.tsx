import { useState, useMemo } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { ScatterplotLayer } from "@deck.gl/layers";
import ControlPanel from "../../components/subway/ControlPanel";

const boroughs = {
  M: "Manhattan",
  Bk: "Brooklyn",
  Q: "Queens",
  Bx: "Bronx",
  SI: "Staten Island",
};

const years = {
  2021: 0,
  2020: 1,
  2019: 2,
};

const Subway = ({ stations, yearCounts }) => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [layers, setLayers] = useState([]);
  const [dataYear, setDataYear] = useState(2021);

  const INITIAL_VIEW_STATE = {
    longitude: -73.966537,
    latitude: 40.757095,
    zoom: 12,
    pitch: 45,
    bearing: 0,
    width: "100vw",
    height: "100vh",
  };
  const [viewport, setViewport] = useState(INITIAL_VIEW_STATE);

  const handleShowPopup = (station) => {
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
  };

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
            onTouchEnd={() => handleShowPopup(station)}
            onMouseEnter={() => handleShowPopup(station)}
            className="flex h-3 w-3 cursor-pointer"
          >
            <div className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></div>
          </div>
        </Marker>
      )),
    [stations]
  );

  const hexLayer = new HexagonLayer({
    id: "hexagon-layer",
    data: yearCounts[years[dataYear]],
    pickable: true,
    extruded: true,
    radius: 150,
    opacity: 0.6,
    elevationScale: 5,
    getPosition: (d) => [Number(d.longitude), Number(d.latitude)],
    getElevationWeight: (d) => Number(d.total_year_entries),
  });

  return (
    <>
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
        {/* {markers} */}
        <DeckGL
          viewState={viewport}
          layers={[hexLayer]}
          controller={true}
          // getTooltip={({object}) => object && `${object.centroid.join(', ')}\nCount: ${object.points.length}`}
        />
      </ReactMapGL>
      <ControlPanel setYear={setDataYear} viewportState={viewport} />
    </>
  );
};

export default Subway;

export const getStaticProps: GetStaticProps = async () => {
  const stations = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/stations`
  );
  const yearCounts2019 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/counts/year/2019`
  );
  const yearCounts2020 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/counts/year/2020`
  );
  const yearCounts2021 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/counts/year/2021`
  );

  return {
    props: {
      stations: stations.data,
      yearCounts: [
        yearCounts2021.data,
        yearCounts2020.data,
        yearCounts2019.data,
      ],
    },
  };
};
