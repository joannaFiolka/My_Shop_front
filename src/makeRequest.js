import axios from "axios";
import {apiUrl} from "./config/api";

export const makeRequest = axios.create({
    baseURL: apiUrl
})