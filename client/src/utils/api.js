export default    function  getParks (searchTerm)  {
         console.log(searchTerm)
        return  fetch(`https://developer.nps.gov/api/v1/activities/parks?q=${searchTerm}&limit=50&start=0&sort=&api_key=vRcC4fdlNLyS86zOSNg7Zze9KbG1BYTRy24e0sQr`) 
    }
    


    