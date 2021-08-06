import React, { useState } from "react";
import { getParks } from "../utils/api";
import { getAlerts } from "../utils/api";

export default function Parks() {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    //  console.log(searchTerm)
    event.preventDefault();

    if (!searchTerm) {
      return false;
    }

    try {
      const response = await getParks(searchTerm);
      setResults(response.data)
      console.log(results);
      if (!response) {
        throw new Error("something went wrong!");
      }

      // const { data } = await response.json();

      // const parkData = data.map((park) => ({
      //   name: park.name,
      // }));
      // setResults(parkData);
      setSearchTerm("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      Key word:
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>Search</button>
      {console.log(results)}
      {results.length
        ? results.map((res) => {
            return (
<<<<<<< HEAD
              <div>
                <h1>{res.name}</h1>
              </div>
=======
              <>
                <h1>{data.parks[0].parkCode}</h1>
                {/* <p>{data.parks}</p> */}
              </>
>>>>>>> cb39305da35c1e581e39ea51b1435c71947b2c2d
            );
          })
        : "no results found"}
    </main>
  );
}
