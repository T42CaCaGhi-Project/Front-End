import getTime from "./getTime";

/**
 * Returns the time of start and finish of an event
 * @param  {Date} dateStart
 * @param  {Date} dateFinish
 * @returns {string} `"HH:MM - HH:MM"`
 */
const formatTime = (dateStart: Date, dateFinish: Date): string => {
  return getTime(dateStart) + " - " + getTime(dateFinish);
};
export default formatTime;
