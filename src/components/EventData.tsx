import { Dialog, DialogTitle, useMediaQuery, useTheme } from "@mui/material/";
import React from "react";
import { Event } from "../types/Events";

const EventData = (props: {
  event: Event | undefined;
  open: boolean;
  setOpen: any;
}) => {
  const { event, open, setOpen } = props;

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (event !== undefined) {
    return (
      <Dialog
        open={open}
        onClose={setOpen(false)}
        fullScreen={fullScreen}
        aria-labelledby="dialog-title"
      >
        <DialogTitle>{event.title}</DialogTitle>
      </Dialog>
    );
  } else {
    return <></>;
  }
};
export default EventData;
