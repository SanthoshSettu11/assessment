
import axios from "axios";
import { environment_URL } from "../environment/base";

export const getMethod = async (request, requestObject) => {
  const url = environment_URL.baseURL + request;
  let response = {};
  response = await axios
    .get(url, {
      data: JSON.stringify(requestObject)
    })
    .then((response) => {
      return response.data;
    })
    .catch((exp) => {
      throw exp;
    });
  return await response;
};