export default function getParks (searchTerm)  {
    const data = await fetch(
        `https://developer.nps.gov/api/v1/parks?q=${searchTerm}&limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr`
    );
    return await data.json();
    }

export default async function  getAlerts (parkCode)  {
    const data = await fetch(
        `https://developer.nps.gov/api/v1/parks?q=${parkCode}&limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr`
    ); 
    return data.json();
    }

    async function init() {
        const { data: parkData } = await getParks("arch");
        const { data: alerts } = getAlert(parkData[0].parkCode);
    }

    init();



