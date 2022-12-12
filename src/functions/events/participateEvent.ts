import { Event } from "../../types/Events";

/**
 * Add the participation of a user to an event
 * @param  {Event} event
 */
const participateEvent = (event: Event) => {
  alert(event.id + " " + "Partecipato!");
};
export default participateEvent;
