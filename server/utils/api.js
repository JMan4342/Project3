const axios = require("axios");

async function getParks(query) {
  const params = new URLSearchParams(query).toString();
  const { data } = await axios.get(
    `https://developer.nps.gov/api/v1/parks?limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr&${params}`
  );
  return data;
}

async function getAlerts(parkCode) {
  const { data } = await axios.get(
    `https://developer.nps.gov/api/v1/alerts?q=${parkCode}&limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr`
  );

  return data;
}

module.exports = {
  getParks,
  getAlerts,
};
