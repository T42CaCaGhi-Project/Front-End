import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const InputLocation = (props: any) => {
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
    </MapContainer>
  );
};
export default InputLocation;
