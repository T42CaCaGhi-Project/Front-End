import { Events } from "./Events";

export type ResponseLogin = {
  status: string;
  data?: string;
  message?: string;
};
export type ResponseEvents = {
  status: string;
  data: Events;
};
