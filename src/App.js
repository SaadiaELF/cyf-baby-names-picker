import React, { useState } from "react";
import babyNames from "./babyNamesData.json";
import Name from "./components/Name";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [names, setNames] = useState(babyNames);
  const [favouritesNames, setFavouritesNames] = useState([]);

  let sortedNames = names.sort((a, b) => {
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

  function addNameToFavourites(e) {
    setFavouritesNames(favouritesNames.concat(sortedNames[e.target.value]));
    let filteredNames = sortedNames.filter(
      (item) => item !== sortedNames[e.target.value]
    );
    setNames(filteredNames);
  }

  function removeNameFromFavourites(e) {
    setNames(names.concat(favouritesNames[e.target.value]));
    let filteredNames = favouritesNames.filter(
      (item) => item !== favouritesNames[e.target.value]
    );
    setFavouritesNames(filteredNames);
  }
  return (
    <div className="App">
      <SearchBar handleChange={handleInputChange} />
      <div className="favourites-text">
        <h3>Favourites</h3>
        <p>Click on name to add it to favourites</p>
      </div>
      <div className="names-container">
        {favouritesNames.map((baby, index) => {
          return (
            <Name
              key={index}
              name={baby.name}
              value={index}
              class={baby.sex + "-name"}
              handleClick={removeNameFromFavourites}
            />
          );
        })}
      </div>
      <div className="separator"></div>
      <div className="names-container">
        {names.map((baby, index) => {
          return (
            <Name
              key={index}
              name={baby.name}
              value={index}
              class={baby.sex + "-name"}
              handleClick={addNameToFavourites}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
