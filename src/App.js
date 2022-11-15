import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyAreas from "./components/keyAreas/KeyAreas";
import KeyBenefits from "./components/KeyBenefits";
import SignUpBanner from "./components/SignUpBanner";
function App() {
  return (
    <div className="App">
      <Hero />
      <KeyAreas />
      <KeyBenefits />
      <SignUpBanner />
      <Footer />
    </div>
  );
}

export default App;
