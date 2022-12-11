import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";

const NewEvent = (props: { user: boolean }) => {
  const { user } = props;

  if (user) {
    return (
      <>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: "top",
          }}
          onClick={() => {
            alert("Nuovo Evento");
          }}
        >
          <AddIcon />
        </Fab>
      </>
    );
  } else {
    return <></>;
  }
};
export default NewEvent;
