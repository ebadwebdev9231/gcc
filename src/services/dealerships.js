// api/dealerships.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://dev.pressroom.getcruisecontrol.com/api/v1/dealerships",
      {
        headers: {
          "Authorization": "Bearer i6NpaCOX7aDXVWfHsnxgJKYuDftBfhxb",
          "Accept": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
