import { Stack, Unstable_Grid2 as Grid2, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { User } from "../types/Users";
import DateFilter from "./DateFilter";
import EventList from "./EventList";
import Login from "./Login";
import MapList from "./MapList";
import NewEvent from "./NewEvent";
import ViewCalendario from "./ViewCalendario";

const PageSelector = (props: {
  user: User | null;
  setUser: any;
  setToken: any;
  selection: string;
  setSelection:any
}) => {
  const { user, setUser, setToken, selection, setSelection } = props;

  const theme = useTheme();

  const [date, setDate] = useState<Date>(new Date());
  //Period has 3 states: day, week, month
  const [period, setPeriod] = useState<string>("day");

  switch (selection) {
    case "Calendario":
      return (
        <>
          <Container maxWidth={"lg"}>
            <Grid2 container spacing={1}>
              <Grid2 xs={4}>
                <Stack spacing={1}>
                  <DateFilter period={period} setPeriod={setPeriod} />
                  <ViewCalendario date={date} setDate={setDate} />
                </Stack>
              </Grid2>
              <Grid2 xs={8}>
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
          <NewEvent user={user} />
        </>
      );
    case "Login":
      return (
        <>
          <Login setUser={setUser} setToken={setToken} setSelection={setSelection}/>
        </>
      );
    default:
      return <></>;
  }
};
export default PageSelector;
