import http from "./httpService";
require("dotenv").config();

let apiEndPoint = process.env.SERVER_URL + "/types";

apiEndPoint = "http://localhost:3900/types";

export function getTypes() {
  return http.get(apiEndPoint);
}
