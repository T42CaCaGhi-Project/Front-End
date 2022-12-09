import { Divider } from "@mui/material";
import React from "react";
import { Location } from "../types/Events";

const EventDataMap = (props: { location: Location; showLocation: boolean }) => {
  const { location, showLocation } = props;

  //Add a map to show the location
  if (showLocation) {
    return (
      <>
        <Divider />
      </>
    );
  } else {
    return <></>;
  }
};

export default EventDataMap;
