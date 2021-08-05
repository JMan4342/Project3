import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";

export default function Contact() {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
      setTo("");
      setFrom("");
      setMessage("");
  }
  return (
    <div>
      <h1 style={{ marginBottom: 50, textAlign: "center" }}>Contact</h1>

      <form
        onSubmit={() => submitForm()}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <label>To:</label>
        <br />
        <input
          type="text"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          required
        />
        <br />
        <br />
        <label for="from">From:</label>
        <br />
        <input
          type="text"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          required
        />
        <br />
        <br />
        <label>Message:</label>
        <br />
        <textarea
          name="message"
          rows="10"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <br />
        <br />
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
}
