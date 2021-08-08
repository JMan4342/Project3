import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCampgrounds } from "../utils/api";

export default function Campgrounds() {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm) {
      return false;
    }

    try {
      const response = await getCampgrounds(searchTerm);
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
      backgroundImage: `url(/tent1.jpg)`,
      height: "80vh",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div>
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
                  <Link to={`campgrounds/${res.id}`}>
                    <h1>{res.name}</h1>
                  </Link>
                </div>
              );
            })
          : "no results found"}
      </main>
    </div>
  </div>
  );
}
