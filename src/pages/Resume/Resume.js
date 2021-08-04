import React from "react";
import {useHistory} from "react-router-dom";

export default function Resume() {
  const history = useHistory();
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <a href='https://www.linkedin.com/in/matthew-st-onge-6a8038209' target="blank">My Resume</a>
    </div>
  );
}
