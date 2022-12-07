//Return the time of the date
const getTime = (date: Date): string => {
  return date.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
};
export default getTime;
