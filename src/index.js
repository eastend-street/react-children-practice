import React from "react";
import ReactDOM from "react-dom";
import Box from "./components/Box/Box";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Box
        imageUrl="https://img.icons8.com/windows/32/000000/maxcdn.png"
        text="Click Text"
      />
      <Box
        imageUrl="https://img.icons8.com/android/24/000000/download-2.png"
        text="Download"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
