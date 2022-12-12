import { Paper } from "@mui/material";
import React from "react";
import ViewCalendario from "./ViewCalendario";

//Add Button for "Day"-"Week"-"Month"
const FilterInput = (props: { date: Date; setDate: any }) => {
  const { date, setDate } = props;
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#ffffff",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <ViewCalendario date={date} setDate={setDate} />
      </Paper>
    </>
  );
};
export default FilterInput;
