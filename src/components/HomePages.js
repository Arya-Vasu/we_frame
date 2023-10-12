import React from "react";
import "../styles.css";
import { Link } from "react-scroll";
import WhatWeDo from "./WhatWeDo";
import WhyChoseUs from "./WhyChoseUs";

const HomePage = () => {
  return (
    <div className="homepage">
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-bg" style={{ textAlign: "center" }}>
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <h1>WeFrame</h1>
              </Link>
              <p>Want web-site? We'll give you.</p>
            </div>
          </div>
        </section>
        <WhatWeDo />
        {/* <VisionMission /> */}
        <WhyChoseUs />
        {/* <ClientWeWorkWith /> */}
      </main>
    </div>
  );
};

export default HomePage;
