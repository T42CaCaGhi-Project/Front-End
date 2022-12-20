import { Icon, LatLngExpression } from "leaflet";
import React, { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import { Location } from "../types/Events";
import PrintMarker from "./PrintMarker";

const SetViewOnClick = (props: { animateRef: any; setMarkerPos: any }) => {
  const { animateRef, setMarkerPos } = props;

  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
    console.log(e);
    const marker = {
      name: "",
      city: "",
      street: "",
      lat: String(e.latlng.lat),
      lon: String(e.latlng.lng),
    } as Location;

    setMarkerPos(marker);
  });

  return null;
};

const InputLocation = (props: {
  marker: Location | null;
  setMarkerPos: any;
  scale: number;
}) => {
  const { marker, setMarkerPos, scale } = props;

  const posTrento = [46.066667, 11.116667] as LatLngExpression;

  return (
    <MapContainer
      center={posTrento}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "300px",
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 4,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PrintMarker marker={marker} scale={scale} />
      <SetViewOnClick animateRef={useRef(true)} setMarkerPos={setMarkerPos} />
    </MapContainer>
  );
};
export default InputLocation;

InputLocation.defaultProps = { scale: 1.5 };
