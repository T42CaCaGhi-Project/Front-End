import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";

const FormNewEvent = (props: { createEvent: boolean; setCreateEvent: any }) => {
  const { createEvent, setCreateEvent } = props;

  if (createEvent) {
    return (
      <>
        <Dialog
          maxWidth={"sm"}
          fullWidth={true}
          open={createEvent}
          onClose={() => {}}
          //fullScreen={fullScreen}
          aria-labelledby="dialog-title"
          scroll={"paper"}
        >
          <DialogTitle textAlign={"center"}>Ciao</DialogTitle>
          <DialogContent></DialogContent>
        </Dialog>
      </>
    );
  } else {
    return <></>;
  }
};
export default FormNewEvent;
