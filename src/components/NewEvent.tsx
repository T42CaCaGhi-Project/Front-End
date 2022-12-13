import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useState } from "react";
import FormNewEvent from "./FormNewEvent";

const NewEvent = (props: { user: boolean }) => {
  const { user } = props;

  const [createEvent, setCreateEvent] = useState<boolean>(false);

  if (user) {
    return (
      <>
        <FormNewEvent
          createEvent={createEvent}
          setCreateEvent={setCreateEvent}
        />
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
            setCreateEvent(true);
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
