import http from "./httpService";
const apiUrl = "http://localhost:3900";
const apiEndPoint = apiUrl + "/users";

export function getUsers() {
  return http.get(apiEndPoint);
}
