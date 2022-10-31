import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const BASE_URL = "http://localhost:8080";
export const API_ROUTES = {
    GET_ALL_EMPLOYEES: `${BASE_URL}/api/employees`
};