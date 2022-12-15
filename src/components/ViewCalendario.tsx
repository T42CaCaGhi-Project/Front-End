import { Paper, TextField } from "@mui/material";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { it } from "date-fns/locale";
import React from "react";

const ViewCalendario = (props: { date: Date; setDate: any }) => {
  const { date, setDate } = props;

  return (
    <Paper
      sx={{
        backgroundColor: "#ffffff",
        padding: "10px",
        textAlign: "left",
      }}
    >
      <LocalizationProvider locale={it} dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Paper>
  );
};
export default ViewCalendario;
