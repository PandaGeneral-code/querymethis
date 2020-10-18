import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000/" });

export const get = async (endpoint) => {
  const response = await instance.get(endpoint);
  return response.data;
};
