/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import axios from "axios";
import AuthService from "./auth";

const API_ENVS = {
  production: "",
  development: "",
  local: "http://localhost:3000",
};

const httpClient = axios.create({ baseURL: API_ENVS.local });

export default {
  auth: AuthService(httpClient),
};
