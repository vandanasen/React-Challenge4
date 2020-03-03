import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [sent, setsent] = useState("");
  if (sent === "open sesame") {
    alert("You can pass");
  }
  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>
      <p>{sent}</p>
      <input
        type="text"
        placeholder="Super duper secret"
        value={sent}
        onChange={e => setsent(e.target.value)}
      />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
