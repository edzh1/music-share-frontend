import axios from "axios";

const api = process.env.REACT_APP_API_ENDPOINT;

export const searchAPI = (query) =>
  axios
    .get(`${api}/link?url=${query}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
