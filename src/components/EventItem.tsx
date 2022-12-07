import { Paper, Typography, Unstable_Grid2 as Grid2 } from "@mui/material";
import React from "react";
import getTime from "../functions/dateParser";
import theme from "../theme/theme";
import { Event } from "../types/Events";

const EventItem = (props: { event: Event }) => {
  const { event } = props;

  event.dateStart = new Date(event.dateStart);
  event.dateFinish = new Date(event.dateFinish);

  return (
    <Paper
      sx={{ backgroundColor: theme.palette.secondary.main, padding: "10px" }}
    >
      <Grid2 container spacing={1}>
        <Grid2 xs={1}>
          <Typography>Data</Typography>
        </Grid2>
        <Grid2 xs={1}>
          <Typography>Star</Typography>
        </Grid2>
        <Grid2 xs={10}>
          <Grid2 container spacing={1} columns={1}>
            <Grid2 xs={1}>
              <Typography align={"right"}>
                {event.title + " - " + event.location}
              </Typography>
            </Grid2>
            <Grid2 xs={1}>
              <Typography align={"right"}>
                {getTime(event.dateStart) + " - " + getTime(event.dateFinish)}
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Paper>
  );
};
export default EventItem;
