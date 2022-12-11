import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Location } from "../types/Events";

import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";

const EventDataMap = (props: { location: Location }) => {
  const { location } = props;

  const position = [
    Number(location.lat),
    Number(location.lon),
  ] as LatLngExpression;

  //Add a map to show the location
  return (
    <>
      <MapContainer
        center={position}
        zoom={40}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "300px",
          marginTop: 8,
          marginBottom: 8,
          borderRadius: 10,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        />
      </MapContainer>
    </>
  );
};

export default EventDataMap;
