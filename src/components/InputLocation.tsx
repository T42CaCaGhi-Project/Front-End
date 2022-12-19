import { Icon, LatLngExpression } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import React, { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";

const SetViewOnClick = (props: { animateRef: any; setMarkerPos: any }) => {
  const { animateRef, setMarkerPos } = props;

  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
    setMarkerPos([e.latlng.lat, e.latlng.lng]);
  });

  return null;
};

const InputLocation = (props: {
  marker: number[];
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
      <Marker
        position={marker as LatLngExpression}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [12.5 * scale, 20.5 * scale],
            iconAnchor: [6 * scale, 20.5 * scale],
          })
        }
        key={1}
      ></Marker>
      <SetViewOnClick animateRef={useRef(true)} setMarkerPos={setMarkerPos} />
    </MapContainer>
  );
};
export default InputLocation;

InputLocation.defaultProps = { scale: 1.5 };
