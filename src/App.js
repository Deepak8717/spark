import "./App.css";
import Hero from "./components/Hero";
import KeyAreas from "./components/keyAreas/KeyAreas";
import KeyBenefits from "./components/KeyBenefits";
function App() {
  return (
    <div className="App">
      <Hero />
      <KeyAreas />
      <KeyBenefits />
    </div>
  );
}

export default App;
