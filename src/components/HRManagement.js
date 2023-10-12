/* Inside the HRManagement.js component */
import React from "react";

const HRManagement = () => {
  return (
    <div className="Va-page">
      <header>
        <h1>HR Management Services</h1>
        <p>Empowering Your Workforce</p>
      </header>
      <div className="profile-container">
        <img src="Barkha.jpeg" alt="Your Name" className="va-img" />
        <div className="profile-info">
          <h1>Shreya Ambar</h1>
          <p>2+ Years of HR Experience</p>
        </div>
      </div>

      <h1>Services We Offer</h1>
      <section>
        <div className="oval-row">
          <div className="oval">Talent Acquisition</div>
          <div className="oval">Policy Development</div>
          <div className="oval">Employee Onboarding</div>
        </div>
        <div className="oval-row">
          <div className="oval">Performance Management</div>
          <div className="oval">Training and Development</div>
          <div className="oval">Employee Engagement</div>
        </div>
      </section>

      <div className="fixed-block">
        <h2>Service Details</h2>
        <p>Comprehensive HR solutions tailored to your needs.</p>
        <p>Talent acquisition and recruitment services.</p>
        <p>Policy development and compliance management.</p>
        <p>Efficient employee onboarding and training.</p>
        <p>Performance management and evaluation.</p>
        <p>Employee engagement and retention strategies.</p>
      </div>

      <section className="introduction">
        <div className="intro-text">
          <h2>Welcome to Our HR Management Services</h2>
          <p>
            We specialize in providing HR management services that empower your
            organization to build a highly skilled and engaged workforce. From
            recruitment to talent development, we offer comprehensive solutions
            to help your business thrive.
          </p>
        </div>
        <div className="hr-management-image">
          <img
            src="https://example.com/hr-management-image.jpg"
            alt="HR Management"
          />
        </div>
      </section>

      <section>
        <h1>Why Choose Us?</h1>
        <ul>
          <li>Customized HR Solutions</li>
          <li>Talent Acquisition Expertise</li>
          <li>Employee-Centric Approach</li>
        </ul>
      </section>

      <section className="contact">
        <p>
          Ready to transform your HR processes? Contact us today to discuss how
          we can support your organization's growth and success.
        </p>
        <a href="/contact">Contact Us</a>
      </section>
    </div>
  );
};

export default HRManagement;
