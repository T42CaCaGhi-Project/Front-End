const fetcherEventAll = async (url: string) => {
  return await fetch(url, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
    mode: "no-cors",
  }).then((res) => res.json());
};
export default fetcherEventAll;
