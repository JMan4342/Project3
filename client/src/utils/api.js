
export async function getParks(searchTerm) {
  const data = await fetch (
 
    `https://developer.nps.gov/api/v1/parks?q=${searchTerm}&limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr`
  );
  return data.json();
  }

export async function getAlerts(parkCode) {
    const data = await fetch(
        `https://developer.nps.gov/api/v1/alerts?q=${parkCode}&limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr`
    );

    return data.json();
    }



