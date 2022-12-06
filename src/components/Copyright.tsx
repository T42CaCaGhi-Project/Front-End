import { Typography } from "@mui/material";
import * as React from "react";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © T42 IngSw "}
      {new Date().getFullYear()}
    </Typography>
  );
};
export default Copyright;
