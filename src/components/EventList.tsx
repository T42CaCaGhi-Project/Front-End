import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../functions/fetcher";
import { Event, Events } from "../types/Events";
import EventItem from "./EventItem";

//Qui bisogna fare la query e prendere i dati del json

const EventList = (props: { date: Date }) => {
  const { date } = props;

  // const { data, error } = useSWR<Events, Error>(
  //   "../../test/events.json",
  //   fetcher
  // );
  const data = require("../test/events.json") as Events;
  const error = null;

  //Debug
  //console.log(data);

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading...</p>;

  if (data.events[0] === undefined) {
    return (
      <p>{"Non ci sono eventi per il giorno: " + date.toLocaleDateString()}</p>
    );
  }

  return (
    <>
      {data.events.map((evento: Event) => (
        <EventItem key={evento.id} event={evento} />
      ))}
    </>
  );
};
export default EventList;
