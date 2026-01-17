import axios from "axios";
import { BASE_URL, TENANT_ID } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/${TENANT_ID}`,
  headers: {
    "Content-Type": "application/json",
  },
});
