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
      setResults(response.data);
      if (!response) {
        throw new Error("something went wrong!");
      }
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
              <div>
                <h1>{res.name}</h1>
              </div>
            );
          })
        : "no results found"}
    </main>
  );
}
