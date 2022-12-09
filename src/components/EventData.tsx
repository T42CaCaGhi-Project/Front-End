import {
  CalendarToday as CalendarTodayIcon,
  Directions as DirectionsIcon,
  Place as PlaceIcon,
  QueryBuilder as WatchIcon,
} from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material/";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import formatDate from "../functions/dateParser/formatDate";
import formatTime from "../functions/dateParser/formatTime";
import { Event } from "../types/Events";
import EventDataMap from "./EventDataMap";

const EventData = (props: {
  event: Event | undefined;
  open: boolean;
  setOpen: any;
}) => {
  const { event, open, setOpen } = props;

  const [showLocation, setShowLocation] = useState<boolean>(false);

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setShowLocation(!showLocation);
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
          <Divider />
          <img
            style={{ width: "100%", height: "auto" }}
            src={require("../test/image1.jpg")}
            alt={"Image"}
          />
          <Divider />
          <Grid2 container spacing={1} columns={2} sx={{ padding: 2 }}>
            <Grid2 xs={1}>
              <Typography fontWeight={"bold"} textAlign={"left"}>
                <PlaceIcon fontSize={"small"} />
                {" " + event.location.name + " - " + event.location.city}
              </Typography>
            </Grid2>
            <Grid2 xs={1}>
              <Typography fontWeight={"bold"} textAlign={"left"}>
                <WatchIcon fontSize={"small"} />
                {" " + formatTime(event.dateStart, event.dateFinish)}
              </Typography>
            </Grid2>
            <Grid2 xs={1}>
              <Typography
                onClick={handleClick}
                fontWeight={"bold"}
                textAlign={"left"}
              >
                <DirectionsIcon fontSize={"small"} />
                {" " + event.location.street}
              </Typography>
            </Grid2>
            <Grid2 xs={1}>
              <Typography fontWeight={"bold"} textAlign={"left"}>
                <CalendarTodayIcon fontSize={"small"} />
                {" " + formatDate(event.dateStart)}
              </Typography>
            </Grid2>
          </Grid2>
          <Divider />
          <EventDataMap location={event.location} showLocation={showLocation}/>
          <Grid2 container spacing={1} columns={1} sx={{ padding: 2 }}>
            <Grid2 xs={2}>
              <TextField
                label={"Descrizione"}
                defaultValue={event.description}
                //disabled
                multiline
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid2>
          </Grid2>
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
