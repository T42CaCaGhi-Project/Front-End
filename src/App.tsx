import { Box, Container } from "@mui/material";
import * as React from "react";
import AppBarMenu from "./components/AppBarMenu";
import Copyright from "./components/Copyright";

export default function App() {
  return (
    <>
      <AppBarMenu />
      <Container maxWidth={"lg"}></Container>
      <Copyright />
    </>
  );
}
