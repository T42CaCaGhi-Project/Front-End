import {
  Stack,
  Typography,
  Unstable_Grid2 as Grid2,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Event } from "../types/Events";
import EventData from "./EventData";
import EventList from "./EventList";
import ViewCalendario from "./ViewCalendario";

//TODO: Fix the change of status of viewDesc only when an event is selected
//TODO: Add detailed event description

const PageSelector = (props: { selection: string }) => {
  const { selection } = props;

  const theme = useTheme();

  const [date, setDate] = useState<Date>(new Date());

  const [viewDesc, setViewDesc] = useState<boolean>(false);

  console.log("viewDesc: " + viewDesc);

  switch (selection) {
    case "Calendario":
      return (
        <>
          <EventData event={undefined} open={viewDesc} setOpen={setViewDesc} />
          <Container maxWidth={"lg"}>
            <Grid2 container spacing={1}>
              <Grid2 xs={6}>
                <ViewCalendario date={date} setDate={setDate} />
              </Grid2>
              <Grid2 xs={6}>
                <Stack spacing={1}>
                  <EventList date={date} />
                </Stack>
              </Grid2>
            </Grid2>
          </Container>
        </>
      );
    case "Mappa":
      return <Typography paragraph>{selection}</Typography>;
    default:
      return <></>;
  }
};
export default PageSelector;
