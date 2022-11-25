import babyNames from "./babyNamesData.json";
import "./App.css";
import Name from "./components/Name";

function App() {
  return (
    <div className="App">
      {babyNames.map((baby, index) => {
        return <Name key={index} name={baby.name} />;
      })}
    </div>
  );
}

export default App;
