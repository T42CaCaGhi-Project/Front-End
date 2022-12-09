export type Events = {
  events: Event[];
};

export type Event = {
  id: number;
  idOwner: number;
  location: Location;
  dateStart: Date;
  dateFinish: Date;
  title: string;
  tags: string[];
  image: string;
  description: string;
  nParticipants: number;
};

export type Location = {
  name: string;
  city: string;
  street: string;
  lat: string;
  lon: string;
};
