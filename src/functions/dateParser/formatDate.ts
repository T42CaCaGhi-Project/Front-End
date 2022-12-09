/**
 * Returns the date as a string
 * @param  {Date} date
 * @returns {string} `"DD/MM/YYYY"`
 */
const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};
export default formatDate;
