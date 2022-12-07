import {
  Place as PlaceIcon,
  QueryBuilder as WatchIcon,
  Star as StarIcon,
  StarOutline as StarOutlineIcon,
} from "@mui/icons-material";
import {
  Button,
  Paper,
  Typography,
  Unstable_Grid2 as Grid2,
  useTheme,
} from "@mui/material";
import React from "react";
import getTime from "../functions/dateParser";
import { Event } from "../types/Events";

const EventItem = (props: { event: Event }) => {
  const { event } = props;

  const theme = useTheme();

  event.dateStart = new Date(event.dateStart);
  event.dateFinish = new Date(event.dateFinish);

  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.secondary.main,
        padding: "10px",
        textAlign: "left",
      }}
      component={"button"}
      onClick={() => {}}
      variant={"outlined"}
    >
      <Grid2 container spacing={1}>
        <Grid2 xs={1} margin={"auto"}>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            {event.dateStart.getDate()}
          </Typography>
          <Typography fontWeight={"bold"} textAlign={"center"}>
            {event.dateStart
              .toLocaleString("it-IT", { month: "short" })
              .toUpperCase()}
          </Typography>
        </Grid2>
        <Grid2 xs={10}>
          <Grid2 container spacing={1} columns={1}>
            <Grid2 xs={1}>
              <Typography variant={"h5"}>{event.title}</Typography>
            </Grid2>
            <Grid2 xs={1}>
              <Grid2 container spacing={1} columns={2}>
                <Grid2 xs={1}>
                  <Typography fontWeight={"bold"} textAlign={"center"}>
                    <PlaceIcon fontSize={"small"} />
                    {" " + event.location}
                  </Typography>
                </Grid2>
                <Grid2 xs={1}>
                  <Typography fontWeight={"bold"} textAlign={"center"}>
                    <WatchIcon fontSize={"small"} />
                    {" " +
                      getTime(event.dateStart) +
                      " - " +
                      getTime(event.dateFinish)}
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 xs={1} textAlign={"center"} margin={"auto"}>
          <StarIcon />
        </Grid2>
      </Grid2>
    </Paper>
  );
};
export default EventItem;
