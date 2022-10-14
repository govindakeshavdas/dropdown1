import React from "react";
import ReactDOM from "react-dom";
import SearchInput1 from "./SearchInput";
import MultiList from "./multilist";

function App() {
  return (
    <div>
      <SearchInput1 />
      <MultiList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
