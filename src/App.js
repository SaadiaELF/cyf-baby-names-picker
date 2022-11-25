import babyNames from "./babyNamesData.json";
import "./App.css";
import Name from "./components/Name";

function App() {
  return (
    <div className="App">
      <div className="names-container">
        {babyNames.map((baby, index) => {
          return (
            <Name key={index} name={baby.name} class={baby.sex + "-name"} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
