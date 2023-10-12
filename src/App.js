import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePages";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import NavbarItems from "./components/NavbarItems";
import SocialMediaIcon from "./components/SocialMediaIcon";
import OurTeam from "./components/OurTeam";
import VirtualAssistant from "./components/VirtualAssistant";
import WebsiteDevelopment from "./components/WebsiteDevelopment";
import HRManagement from "./components/HRManagement";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const toggleSocial = () => {
    setIsSocialOpen(!isSocialOpen);
  };

  return (
    <div style={{ height: "100%" }}>
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        toggleSocial={toggleSocial}
      />
      {/* Left Drawer */}
      {isMenuOpen ? (
        <div className="leftDrawer" onClick={toggleMenu}>
          <NavbarItems isMenuOpen={isMenuOpen} />
        </div>
      ) : (
        ""
      )}
      {/* Right Drawer */}
      {isSocialOpen ? (
        <div className="rightDrawer" onClick={toggleSocial}>
          <SocialMediaIcon isSocialOpen={isSocialOpen} />
        </div>
      ) : (
        ""
      )}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/VirtualAssistant" element={<VirtualAssistant />} />
        <Route path="/WebsiteDevelopment" element={<WebsiteDevelopment />} />
        <Route path="/HRManagement" element={<HRManagement />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="notfoundimage">
      <img src="/pagenotfound.jpg" alt="PageNotFound" />
      <button onClick={() => navigate("/")}>Go to HomePage</button>
    </div>
  );
}
