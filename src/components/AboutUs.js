import React from "react";
import VisionMission from "./VisionMission";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-header">
        <h1>About WeFrame</h1>
        <p>Enhancing Lives, One Service at a Time</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At WeFrame, our mission is to simplify and enhance the lives of our
          clients by providing high-quality services that meet their unique
          needs. We are dedicated to delivering excellence and reliability in
          everything we do.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Excellence</li>
          <li>Reliability</li>
          <li>Customer-Centric Approach</li>
          <li>Innovation</li>
        </ul>
      </section>
<VisionMission/>
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img
            src="barkha.jpeg"
            alt="Team Member 1"
            className="team-member-image"
          />
          <h3>Shreya Ambar</h3>
          <p>CHRO</p>
        </div>

        <div className="team-member">
          <img
            src="king.jpeg"
            alt="Team Member 2"
            className="team-member-image"
          />
          <h3>Vasu Arya</h3>
          <p>CTO</p>
        </div>

        {/* Add more team members as needed */}
      </section>
    </div>
  );
};

export default AboutUs;
