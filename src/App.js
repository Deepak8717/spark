import { Navbar } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyAreas from "./components/keyAreas/KeyAreas";
import KeyBenefits from "./components/KeyBenefits";
import SignUpBanner from "./components/SignUpBanner";
import SideModal from "./components/SideModal";
import { useState } from "react";
function App() {
  const [toggleSideModal, setToggleSideModal] = useState(false);
  const handleToggle = () => {
    setToggleSideModal(!toggleSideModal);
  };
  return (
    <div className="App">
      <Hero handleToggle={handleToggle} />
      {toggleSideModal !== false && <SideModal handleToggle={handleToggle} />}

      {/* <KeyAreas />
      <KeyBenefits />
      <SignUpBanner />
      <Footer /> */}
    </div>
  );
}

export default App;
