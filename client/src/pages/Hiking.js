// import  Container  from "react-bootstrap/Container";
import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_THINGSTODO } from "../utils/mutations";
import { Link } from "react-router-dom";
import { getThingsToDo } from "../utils/api";
import Auth from "../utils/auth";

export default function Activities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  // const [addThingsToDo, { data }] = useMutation(ADD_THINGSTODO);

  const handleSubmit = async (event) => {
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

  const handleSaveThingsToDo = async (id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    // addThingsToDo({ variable: { id } });
    try {
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
                  <div key={res.id}>
                    <Link to={`/thingstodo/${res.id}`}>
                      <h1>{res.title}</h1>
                    </Link>
                    <p>{res.relatedParks[0].fullName}</p>
                    {/* Need to add logic so that you can't see the save button if the park has already been saved */}
                    {Auth.loggedIn() && (
                      <button onClick={() => handleSaveThingsToDo(res.id)}>
                        Save
                      </button>
                    )}
                  </div>
                );
              })
            : "no results found"}
        </div>
      </main>
    </div>
  );
}
