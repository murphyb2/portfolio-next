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

const Subway = ({ stations, yearCounts, monthlyCounts, aggregate }) => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [layers, setLayers] = useState([]);
  const [dataYear, setDataYear] = useState(2021);
  const [monthly, setMonthly] = useState(true);
  const [dataMonth, setDataMonth] = useState(1);

  const INITIAL_VIEW_STATE = {
    longitude: -73.966537,
    latitude: 40.757095,
    zoom: 11,
    pitch: 45,
    bearing: 0,
    width: "100vw",
    height: "100vh",
  };
  const [viewport, setViewport] = useState(INITIAL_VIEW_STATE);

  // const handleShowPopup = (station) => {
  //   setSelectedStation({
  //     latitude: Number(station.gtfs_latitude),
  //     longitude: Number(station.gtfs_longitude),
  //     name: station.stop_name,
  //     division: station.division,
  //     line: station.line,
  //     borough: boroughs[station.borough],
  //     daytime_routes: station.daytime_routes,
  //     structure: station.structure,
  //     north: station.north_direction_label,
  //     south: station.south_direction_label,
  //   });
  //   setShowPopup(true);
  // };

  // Only rerender markers if props.data has changed
  // const markers = useMemo(
  //   () =>
  //     stations.map((station) => (
  //       <Marker
  //         key={station.id}
  //         latitude={Number(station.gtfs_latitude)}
  //         longitude={Number(station.gtfs_longitude)}
  //       >
  //         <div
  //           onTouchEnd={() => handleShowPopup(station)}
  //           onMouseEnter={() => handleShowPopup(station)}
  //           className="flex h-3 w-3 cursor-pointer"
  //         >
  //           <div className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></div>
  //         </div>
  //       </Marker>
  //     )),
  //   [stations]
  // );

  const hexLayer = new HexagonLayer({
    id: "hexagon-layer",
    data: monthly
      ? monthlyCounts[years[dataYear]].filter((s) => s.month == dataMonth)
      : yearCounts[years[dataYear]],
    pickable: true,
    extruded: true,
    radius: 150,
    opacity: 0.6,
    elevationScale: 10,
    getPosition: (d) =>
      monthly
        ? [Number(d.gtfs_longitude), Number(d.gtfs_latitude)]
        : [Number(d.longitude), Number(d.latitude)],
    getElevationWeight: (d) => {
      return monthly
        ? d.monthly_entries
        : Number(d.total_year_entries) /
            aggregate.entries[dataYear].total_year_entries__max;
    },
  });

  const scatterLayer = new ScatterplotLayer({
    id: "scatterplot-layer",
    data: stations,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 2,
    radiusMaxPixels: 50,
    lineWidthMinPixels: 1,
    getPosition: (d) => [Number(d.gtfs_longitude), Number(d.gtfs_latitude)],
    getFillColor: (d) => [255, 140, 0],
    // getRadius: (d) => 10,
    // getLineColor: (d) => [0, 0, 0],
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
          layers={[hexLayer, scatterLayer]}
          controller={true}
          getTooltip={({ object }) => {
            if (object) {
              const station =
                object.stop_name &&
                `${object.stop_name}\nDaytime Routes: ${object.daytime_routes}\nNorth Direction Label: ${object.north_direction_label}\nSouth Direction Label: ${object.south_direction_label}\n`;
              const stops = object?.points?.map((s) => `${s.source.stop_name}`);
              const entries = object?.points?.reduce(
                (acc, cur) => acc + Number(cur.source.total_year_entries),
                0
              );
              const exits = object?.points?.reduce(
                (acc, cur) => acc + Number(cur.source.total_year_exits),
                0
              );

              return station
                ? station
                : stops.reduce((acc, stop) => `${acc}\n ${stop}`) +
                    `\nTotal Entries: ${entries}` +
                    `\nTotal Exits: ${exits}`;
            }
            return null;
            // console.log(object?.stop_name);
            // const station = object?.stop_name;
            // console.log(object?.points?.map((s) => s.source));
            // return object && `${object.stop_name}\n${object.daytime_routes}`;
          }}
        />
      </ReactMapGL>
      <ControlPanel
        setYear={setDataYear}
        setMonthly={() => setMonthly(!monthly)}
        monthly={monthly}
        month={dataMonth}
        setDataMonth={setDataMonth}
        viewportState={viewport}
      />
    </>
  );
};

export default Subway;

export const getStaticProps: GetStaticProps = async () => {
  const stations = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/stations`
  );
  const yearCounts2019 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/2019`
  );
  const monthlyCounts2019 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/month/2019`
  );
  const yearCounts2020 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/2020`
  );
  const monthlyCounts2020 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/month/2020`
  );
  const yearCounts2021 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/2021`
  );
  const monthlyCounts2021 = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/month/2021`
  );
  const aggregate = await axios.get(
    `${process.env.NEXT_PUBLIC_SUBWAY_API_URL}/totals`
  );

  return {
    props: {
      stations: stations.data,
      yearCounts: [
        yearCounts2021.data,
        yearCounts2020.data,
        yearCounts2019.data,
      ],
      monthlyCounts: [
        monthlyCounts2021.data,
        monthlyCounts2020.data,
        monthlyCounts2019.data,
      ],
      aggregate: aggregate.data,
    },
  };
};
