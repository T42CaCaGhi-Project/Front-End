import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

const DateFilter = (props: { period: string; setPeriod: any }) => {
  const { period, setPeriod } = props;

  return (
    <Paper
      sx={{
        backgroundColor: "#ffffff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <ToggleButtonGroup
        value={period}
        exclusive
        onChange={(event: any, value: string) => {
          setPeriod(value);
        }}
        aria-label="text alignment"
      >
        <ToggleButton value="day" aria-label="left aligned">
          <Typography>Day</Typography>
        </ToggleButton>
        <ToggleButton value="week" aria-label="center aligned">
          <Typography>Week</Typography>
        </ToggleButton>
        <ToggleButton value="month" aria-label="right aligned">
          <Typography>Month</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
};
export default DateFilter;
