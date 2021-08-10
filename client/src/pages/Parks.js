import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PARK } from "../utils/mutations";
import { Link } from "react-router-dom";
import { getParks } from "../utils/api";
import { getAlerts } from "../utils/api";
// import { saveParkCodes, getSavedParkCodes } from "../utils/localStorage";
import Auth from "../utils/auth";

export default function Parks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [addPark, { data }] = useMutation(ADD_PARK);

  const handleSubmit = async (event) => {
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

  const handleSavePark = async (parkCode) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    addPark({ variables: { parkCode } });
    try {
      {
        throw new Error("something went wrong?");
      }

      // setSavedParkCodes([...savedParkCodes, parkToSave.parkCode]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(/img/parks1-sm.jpg)`,
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
                  <div key={res.parkCode}>
                    <Link to={`/parks/${res.parkCode}`}>
                      <h1>{res.name}</h1>
                    </Link>
                    <button onClick={handleSavePark}>Save</button>
                  </div>
                );
              })
            : "no results found"}
        </div>
      </main>
    </div>
  );
}
