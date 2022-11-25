import babyNames from "./babyNamesData.json";
import Name from "./components/Name";
import SearchBar from "./components/SearchBar";
import "./App.css";

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

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="names-container">
        {sortedNames.map((baby, index) => {
          return (
            <Name key={index} name={baby.name} class={baby.sex + "-name"} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
