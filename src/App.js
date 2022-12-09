import React, { useEffect, useState } from "react";
import babyNames from "./babyNamesData.json";
import SearchBar from "./components/SearchBar";
import NamesContainer from "./components/NamesContainer";
import FavouritesText from "./components/FavouritesText";
import Separator from "./components/Separator";
import GenderFilter from "./components/GenderFilter";
import "./App.css";

function App() {
  const [names, setNames] = useState(babyNames);
  const [favouritesNames, setFavouritesNames] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  let sortedNames = names.sort((a, b) => {
    let nA = a.name.toLowerCase();
    let nB = b.name.toLowerCase();
    return nA < nB ? -1 : nA > nB ? 1 : 0;
  });

  useEffect(() => {
    if (searchVal !== "") {
      let filtered = names.filter((baby) =>
        baby.name.toLowerCase().includes(searchVal)
      );
      setFilteredNames(filtered);
    } else {
      setFilteredNames(names);
    }
  }, [names, searchVal]);

  function handleInputChange(e) {
    setSearchVal(e.target.value.toLowerCase());
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

  function filterNamesBySex(e) {
    if (e.target.value !== "none") {
      setNames(babyNames.filter(({ sex }) => sex === e.target.value));
    } else {
      setNames(babyNames);
    }
  }
  return (
    <div className="App">
      <h1 className="title">Baby Name Picker</h1>
      <SearchBar handleChange={(e) => handleInputChange(e)} />
      <GenderFilter handleCheck={filterNamesBySex} />
      <Separator />
      <FavouritesText />
      <NamesContainer
        names={favouritesNames}
        handleClick={removeNameFromFavourites}
      />
      <Separator />
      <NamesContainer
        names={searchVal ? filteredNames : names}
        handleClick={addNameToFavourites}
      />
    </div>
  );
}

export default App;
