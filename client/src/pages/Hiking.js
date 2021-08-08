import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../utils/api";

export default function Activities() {
    const [searchTerm, setSearchTerm] = useState("");
  
    const [results, setResults] = useState([]);
  
    const handleSubmit = async (event) => {
      //  console.log(searchTerm)
      event.preventDefault();
  
      if (!searchTerm) {
        return false;
      }
  
      try {
        const response = await getActivities(searchTerm);
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
      <div
      style={{
        backgroundImage: `url(/Waterfall.jpg)`,
        height: "80vh",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
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
                  <Link to={`/thingstodo/${res.id}`}>
                    <h1>{res.title}</h1>
                  </Link>
                    <p>{res.relatedParks[0].fullName}</p>
                </div>
              );
            })
          : "no results found"}
      </main>
    </div>
    );
  }