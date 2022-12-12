import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { Icon, LatLngExpression } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { Events } from "../types/Events";

const createMarkers = (data: Events) => {
  return (
    <>
      {data.events.map((event) => {
        const pos = [
          Number(event.location.lat),
          Number(event.location.lon),
        ] as LatLngExpression;

        <Marker
          position={pos}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
          key={event.id}
        />;
      })}
    </>
  );
};

const MapList = (props: any) => {
  const date = Date();

  // const { data, error } = useSWR<Events, Error>(
  //   "../../test/events.json",
  //   fetcher
  // );
  const data = require("../test/events.json") as Events;
  const error = null;

  const posTrento = [46.066667, 11.116667] as LatLngExpression;

  return (
    <>
      <MapContainer
        center={posTrento}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          width: "100wh",
          height: "80vh",
          marginTop: 8,
          marginBottom: 8,
          borderRadius: 10,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {createMarkers(data)}
      </MapContainer>
    </>
  );
};
export default MapList;
