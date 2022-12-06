import { Dayjs } from "dayjs";
import React, { useState } from "react";
import Event from "./Event";

//Qui bisogna fare la query e prendere i dati del json

const EventList = (props: { date: Dayjs }) => {
  const { date } = props;
  const [noData, setNoData] = useState<boolean>(false);

  if (noData) {
    return (
      <p>{"Non ci sono eventi per il giorno: " + date.format("DD-MM-YYYY")}</p>
    );
  }

  return (
    <>
      <Event>{date.format("DD-MM-YYYY")}</Event>
      <Event>2</Event>
      <Event>3</Event>
    </>
  );
};
export default EventList;
