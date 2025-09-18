import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.pressroom.getcruisecontrol.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer i6NpaCOX7aDXVWfHsnxgJKYuDftBfhxb`
  },
});

export default api;
