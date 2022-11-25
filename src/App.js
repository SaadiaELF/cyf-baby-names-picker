import React, { useState } from "react";
import babyNames from "./babyNamesData.json";
import Name from "./components/Name";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [names, setNames] = useState(babyNames);

  const sortedNames = babyNames.sort((a, b) => {
    let nA = a.name.toLowerCase();
    let nB = b.name.toLowerCase();

    if (nA < nB) {
      return -1;
    }
    if (nA > nB) {
      return 1;
    }
    return 0;
  });

  function handleInputChange(e) {
    let names = sortedNames.filter((baby) => {
      return baby.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setNames(names);
  }

  return (
    <div className="App">
      <SearchBar handleChange={handleInputChange} />
      <div className="names-container">
        {names.map((baby, index) => {
          return (
            <Name key={index} name={baby.name} class={baby.sex + "-name"} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
