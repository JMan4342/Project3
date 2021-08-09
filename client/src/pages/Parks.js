import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div style={{
      backgroundImage: `url(/img/parks1-sm.jpg)`, height:"80vh", backgroundSize: "100% 100%", backgroundRepeat:"no-repeat"
    }}>
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
                <Link to={`/parks/${res.parkCode}`}>
                  <h1>{res.name}</h1>
                </Link>
              </div>
            );
          })
        : "no results found"}
    </main>
    </div>
  );
}
