import React, { useState } from "react";
import getParks from "../utils/api";

export default function Parks() {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);

  function handleSubmit(event) {
    //  console.log(searchTerm)
    getParks(searchTerm)
      .then((response) => response.json())
      .then((res) => {
        setResults(res.data);
      });
  }

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
      {results.length > 0
        ? results.map((data) => {
            return (
              <>
                <h1>{data.parks[0].parkCode}</h1>
                {/* <p>{data.parks}</p> */}
              </>
            );
          })
        : "no results found"}
    </main>
  );
}
