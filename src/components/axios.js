import axios from "axios";
import { baseUrl } from "./Banner/constants/constants";
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance