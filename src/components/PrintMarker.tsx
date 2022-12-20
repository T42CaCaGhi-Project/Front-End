import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import React from "react";
import { Marker } from "react-leaflet";
import { Location } from "../types/Events";

const PrintMarker = (props: { marker: Location | null; scale: number }) => {
  const { marker, scale } = props;

  if (marker !== null) {
    return (
      <Marker
        position={[Number(marker.lat), Number(marker.lon)]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [12.5 * scale, 20.5 * scale],
            iconAnchor: [6 * scale, 20.5 * scale],
          })
        }
        key={1}
      ></Marker>
    );
  } else {
    return <></>;
  }
};
export default PrintMarker;
