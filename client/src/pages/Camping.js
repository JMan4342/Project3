import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCampgrounds } from "../utils/api";

//  import { getAlerts } from "../utils/api";
// =============================================
// ==DEVELOPING  CAMPING ROUTE === BROKEN==
// ============================================

export default function Campgrounds() {
  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    //  console.log(searchTerm)
    event.preventDefault();

    if (!searchTerm) {
      return false;
    }

    try {
      // const response = await getCamping(searchTerm);
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
        backgroundImage: `url(/img/camping3-sm.jpg)`,
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
                    {/* <Link to={`/camping/${res.data}`}></Link>{" "} */}
                    <Link to={`/campgrounds/${res.id}`}>
                      <h1>{res.name}</h1>
                    </Link>
                  </div>
                );
              })
            : "no results found"}
        </div>
      </main>
    </div>
  );
}
