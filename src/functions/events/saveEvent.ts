import { Event } from "../../types/Events";

const saveEvent = (event: Event) => {
  alert(event.id + " " + "Evento Salvato");
};
export default saveEvent;
