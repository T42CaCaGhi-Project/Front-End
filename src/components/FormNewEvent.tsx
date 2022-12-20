import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Input,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { it } from "date-fns/locale";
import { MuiChipsInput } from "mui-chips-input";
import React, { useState } from "react";
import composeInputForm from "../functions/compose/composeInputForm";
import checkFileType from "../functions/fileParser/checkFileType";
import { Location } from "../types/Events";
import InputLocation from "./InputLocation";

const FormNewEvent = (props: { createEvent: boolean; setCreateEvent: any }) => {
  const { createEvent, setCreateEvent } = props;

  const today = new Date();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setTitle("");
    setDateStart(new Date(""));
    setDateFinish(new Date(""));
    setTags([]);
    setDescription("");
    setFile(null);
    setPosition(null);

    setCreateEvent(false);
  };
  const handleCreation = () => {
    if (file === null) {
      alert("File is null");
    }
    if (position === null) {
      alert("Position is null");
    }

    if (file !== null && position !== null) {
      /*composeInputForm(
        title,
        dateStart,
        dateFinish,
        tags,
        description,
        file,
        position
      );*/
    }

    handleClose;
  };

  //Form data
  const [title, setTitle] = useState<string>("");
  const [dateStart, setDateStart] = useState<Date>(new Date(""));
  const [dateFinish, setDateFinish] = useState<Date>(new Date(""));
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);
  const [position, setPosition] = useState<Location | null>(null);

  const handleFileChange = (filePath: string) => {
    //File size debug
    //console.log(newFile.size);

    console.log(filePath);

    const newFile = require(filePath);

    if (newFile !== null) {
      if (newFile.size <= 4000000) {
        if (checkFileType(newFile)) {
          setFile(newFile);
        } else {
          alert("File is not an Image");
        }
      } else {
        alert("File size > 4MB \n Scegliere un file < 4MB");
      }
    }
  };

  if (createEvent) {
    return (
      <>
        <Dialog
          maxWidth={"sm"}
          fullWidth={true}
          open={createEvent}
          onClose={() => {}}
          fullScreen={fullScreen}
          aria-labelledby="dialog-title"
          scroll={"paper"}
        >
          <DialogTitle textAlign={"center"}>Crea un nuovo evento</DialogTitle>
          <DialogContent>
            <Divider />
            <Stack marginY={2} spacing={2}>
              <TextField
                required
                variant={"outlined"}
                label={"Nome Evento"}
                type={"text"}
                value={title}
                onChange={(event) => setTitle(String(event.target.value))}
              />
              <LocalizationProvider locale={it} dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField required {...props} />}
                  label={"Data Inizio"}
                  value={dateStart}
                  onChange={(data) => {
                    if (data !== null) {
                      setDateStart(data);
                    }
                  }}
                  minDateTime={today}
                />
              </LocalizationProvider>
              <LocalizationProvider locale={it} dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField required {...props} />}
                  label={"Data Fine"}
                  value={dateFinish}
                  onChange={(data) => {
                    if (data !== null) {
                      setDateFinish(data);
                    }
                  }}
                  minDateTime={dateStart}
                />
              </LocalizationProvider>
              <MuiChipsInput
                required
                label={"Tags"}
                fullWidth
                value={tags}
                onChange={(items) => setTags(Array.from(new Set(items)))}
                placeholder={"Aggiungi Tag"}
                renderChip={(Component, props) => {
                  return (
                    <Component
                      {...props}
                      sx={{ marginRight: 0.5 }}
                      color={"secondary"}
                    />
                  );
                }}
              />
              <TextField
                required
                variant={"outlined"}
                label={"Descrizione"}
                placeholder={"Aggiungi una descrizione"}
                multiline
                value={description}
                onChange={(event) => setDescription(String(event.target.value))}
              />
              <InputLocation marker={position} setMarkerPos={setPosition} />
              <TextField
                required
                variant={"outlined"}
                //label={"Immagine"}
                type={"file"}
                inputProps={{ accept: "image/png, image/jpeg, image/jpg" }}
                value={file}
                onChange={(event) => console.log(event.target.value)}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Annulla</Button>
            <Button variant={"contained"} onClick={handleCreation}>
              Crea
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  } else {
    return <></>;
  }
};
export default FormNewEvent;
