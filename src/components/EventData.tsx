import {
  CalendarToday as CalendarTodayIcon,
  Directions as DirectionsIcon,
  Place as PlaceIcon,
  QueryBuilder as WatchIcon,
} from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@mui/material/";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { borderRadius } from "@mui/system";
import React, { useState } from "react";
import formatDate from "../functions/dateParser/formatDate";
import formatTime from "../functions/dateParser/formatTime";
import participateEvent from "../functions/events/participateEvent";
import saveEvent from "../functions/events/saveEvent";
import { Event } from "../types/Events";
import EventDataMap from "./EventDataMap";

const EventData = (props: {
  event: Event | undefined;
  open: boolean;
  setOpen: any;
}) => {
  const { event, open, setOpen } = props;

  const theme = useTheme();

  const styles = {
    "& .MuiInputLabel-root": { color: theme.palette.primary.main },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: theme.palette.primary.main },
      "&:hover > fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  };

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  if (event !== undefined) {
    return (
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        open={open}
        onClose={() => {}}
        fullScreen={fullScreen}
        aria-labelledby="dialog-title"
        scroll={"paper"}
      >
        <DialogTitle textAlign={"center"}>{event.title}</DialogTitle>
        <DialogContent>
          <Divider />
          <img
            style={{
              width: "100%",
              height: "auto",
              marginTop: 8,
              borderRadius: 4,
            }}
            src={require("../test/" + event.image)}
            alt={"Image"}
          />
          <Divider />
          <Grid2 container spacing={1} columns={2} sx={{ padding: 2 }}>
            <Grid2 xs={1}>
              <TextField
                label={"Luogo"}
                defaultValue={event.location.name + " - " + event.location.city}
                //disabled
                multiline
                fullWidth
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <PlaceIcon fontSize={"small"} />
                    </InputAdornment>
                  ),
                }}
                sx={styles}
              />
            </Grid2>
            <Grid2 xs={1}>
              <TextField
                label={"Orario"}
                defaultValue={formatTime(event.dateStart, event.dateFinish)}
                //disabled
                multiline
                fullWidth
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <WatchIcon fontSize={"small"} />{" "}
                    </InputAdornment>
                  ),
                }}
                sx={styles}
              />
            </Grid2>
            <Grid2 xs={1}>
              <TextField
                label={"Indirizzo"}
                defaultValue={event.location.street}
                //disabled
                multiline
                fullWidth
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsIcon fontSize={"small"} />
                    </InputAdornment>
                  ),
                }}
                sx={styles}
              />
            </Grid2>
            <Grid2 xs={1}>
              <TextField
                label={"Giorno"}
                defaultValue={formatDate(event.dateStart)}
                //disabled
                multiline
                fullWidth
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon fontSize={"small"} />
                    </InputAdornment>
                  ),
                }}
                sx={styles}
              />
            </Grid2>
          </Grid2>
          <Divider />
          <EventDataMap location={event.location} />
          <Divider />
          <Stack spacing={2} sx={{ padding: 2 }}>
            <TextField
              label={"Descrizione"}
              defaultValue={event.description}
              //disabled
              multiline
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={styles}
            />
            <Autocomplete
              multiple
              options={event.tags}
              defaultValue={event.tags}
              readOnly
              renderInput={(params) => (
                <TextField {...params} variant={"outlined"} label={"Tag"} />
              )}
              renderTags={(tags) =>
                tags.map((tag) => (
                  <Chip
                    label={tag}
                    sx={{ marginRight: 0.5 }}
                    color={"secondary"}
                    key={tag}
                  />
                ))
              }
              sx={styles}
            />
            <TextField
              label={"Partecipanti"}
              defaultValue={event.nParticipants}
              //disabled
              multiline
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              sx={styles}
            />
          </Stack>
          <Divider />
          <Grid2 container spacing={1} columns={2} sx={{ padding: 2 }}>
            <Grid2 xs={1} textAlign={"center"}>
              <Button
                variant={"contained"}
                onClick={() => participateEvent(event)}
              >
                Partecipo
              </Button>
            </Grid2>
            <Grid2 xs={1} textAlign={"center"}>
              <Button variant={"contained"} onClick={() => saveEvent(event)}>
                Salva Evento
              </Button>
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return <></>;
  }
};
export default EventData;
