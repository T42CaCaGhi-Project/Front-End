export type Events = {
  events: Event[];
};

export type Event = {
  id: number;
  idOwner: number;
  location: string;
  dateStart: Date;
  dateFinish: Date;
  title: string;
  tags: string[];
  image: string;
  description: string;
  nParticipants: number;
};
