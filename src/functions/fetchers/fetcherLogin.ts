import { User } from "../../types/Users";

const fetcherLogin = (url: string, body: User) => {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  }).then((res) => res.json());
};
export default fetcherLogin;
