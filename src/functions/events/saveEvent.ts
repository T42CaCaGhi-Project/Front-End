import { Event } from "../../types/Events";

/**
 * Save the event in order to send them a notification
 * @param  {Event} event
 */
const saveEvent = (event: Event) => {
  alert(event.id + " " + "Evento Salvato");
};
export default saveEvent;
