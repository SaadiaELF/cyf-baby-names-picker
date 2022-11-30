import React, { useState } from "react";
import babyNames from "./babyNamesData.json";
import SearchBar from "./components/SearchBar";
import "./App.css";
import NamesContainer from "./components/NamesContainer";
import FavouritesText from "./components/FavouritesText";
import Separator from "./components/Separator";

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
      <Separator />
      <FavouritesText />
      <NamesContainer
        names={favouritesNames}
        handleClick={removeNameFromFavourites}
      />
      <Separator />
      <NamesContainer names={names} handleClick={addNameToFavourites} />
    </div>
  );
}

export default App;
