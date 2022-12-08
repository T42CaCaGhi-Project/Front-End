import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material/";
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

  const handleClose = () => {
    setOpen(false);
  };

  if (event !== undefined) {
    return (
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        open={open}
        onClose={() => {}}
        fullScreen={fullScreen}
        aria-labelledby="dialog-title"
        scroll={"paper"}
      >
        <DialogTitle textAlign={"center"}>{event.title}</DialogTitle>
        <DialogContent>
          <img
            style={{ width: "100%", height: "auto" }}
            src={"../test/image1.jpg"}
            alt={"Image"}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return <></>;
  }
};
export default EventData;
