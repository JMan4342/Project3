import React from "react";
import {useHistory} from "react-router-dom";

export default function Resume() {
  const history = useHistory();
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <a href='https://www.google.com' target="blank">Link to Google</a>
    </div>
  );
}
