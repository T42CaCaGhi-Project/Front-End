import {
  Paper,
  Stack,
  Typography,
  Unstable_Grid2 as Grid2,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import EventList from "./EventList";
import FilterInput from "./FilterInput";
import MapList from "./MapList";
import NewEvent from "./NewEvent";
import ViewCalendario from "./ViewCalendario";

const PageSelector = (props: { user: boolean; selection: string }) => {
  const { user, selection } = props;

  const theme = useTheme();

  const [date, setDate] = useState<Date>(new Date());

  switch (selection) {
    case "Calendario":
      return (
        <>
          <Container maxWidth={"lg"}>
            <Grid2 container spacing={1}>
              <Grid2 xs={6}>
                <FilterInput date={date} setDate={setDate}/>
              </Grid2>
              <Grid2 xs={6}>
                <Stack spacing={1}>
                  <EventList date={date} />
                </Stack>
              </Grid2>
            </Grid2>
          </Container>
          <NewEvent user={user} />
        </>
      );
    case "Mappa":
      return (
        <>
          <Container maxWidth={"lg"}>
            <MapList />
          </Container>
        </>
      );
    default:
      return <></>;
  }
};
export default PageSelector;
