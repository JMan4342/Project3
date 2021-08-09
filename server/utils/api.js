const axios = require("axios");
require("dotenv").config()

const { NPS_API_KEY } = process.env;

async function getParks(query) {
  const params = new URLSearchParams(query).toString();
  const { data } = await axios.get(
    `https://developer.nps.gov/api/v1/parks?limit=50&start=0&sort=&api_key=${NPS_API_KEY}&${params}`
  );
  return data;
}

async function getAlerts(parkCode) {
  const { data } = await axios.get(
    `https://developer.nps.gov/api/v1/alerts?q=${parkCode}&limit=50&start=0&sort=&api_key=${NPS_API_KEY}`
  );
  return data;
}

async function getActivities(query) {
  const params = new URLSearchParams(query).toString();
  const { data } = await axios.get(
    `https://developer.nps.gov/api/v1/thingstodo?q=${params}&limit=50&start=0&sort=&api_key=${NPS_API_KEY}`
  );
  return data;
  }
// async function getCamping(query) {
//   const params = new URLSearchParams(query).toString();
//   const { data } = await axios.get(
//     `https://developer.nps.gov/api/v1/camping?q=${params}&limit=50&start=0&sort=&api_key=${NPS_API_KEY}`
//   );
//   return data;
// }



module.exports = {
  getParks,
  getAlerts,
  getActivities
  // ,getCamping
};
