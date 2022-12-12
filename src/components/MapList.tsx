import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { BorderColor } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Icon, LatLngExpression, Point } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import theme from "../theme/theme";
import { Event, Events } from "../types/Events";
import EventData from "./EventData";

const createMarkers = (data: Events) => {
  return data.events.map((event) => createMarker(event));
};
const createMarker = (event: Event) => {
  const [viewDesc, setViewDesc] = useState<boolean>(false);

  const scale = 1.5;
  const pos = [
    Number(event.location.lat),
    Number(event.location.lon),
  ] as LatLngExpression;

  return (
    <>
      <EventData event={event} open={viewDesc} setOpen={setViewDesc} />
      <Marker
        position={pos}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [12.5 * scale, 20.5 * scale],
            iconAnchor: [6 * scale, 20.5 * scale],
          })
        }
        key={event.id}
      >
        <Popup offset={new Point(0.5, -10 * scale)}>
          <Button
            variant={"contained"}
            onClick={() => {
              setViewDesc(true);
            }}
          >
            {event.title}
          </Button>
        </Popup>
      </Marker>
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
          borderRadius: 4,
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
