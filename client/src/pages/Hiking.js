import  Container  from "react-bootstrap/Container";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getThingsToDo } from "../utils/api";

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
      const response = await getThingsToDo(searchTerm);
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
        backgroundImage: `url(/img/hiking.jpg)`,
        height: "80vh",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main>
      <div className="searchBar">
          <p className="search">Keyword:</p>
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        
        <button onClick={handleSubmit}>Search</button>
        {console.log(results)}
        </div>
        <div className="parks">
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
          </div>
      </main>
    </div>
  );
}
