/* Inside the WebsiteDevelopment.js component */
import React from "react";
import TechnologyWeWorkOnNew from "./TechnologyWeWorkOnNew";

const WebsiteDevelopment = () => {
  return (
    <div className="Va-page">
      <header>
        <h1>Website Development Services</h1>
        <p>Crafting Memorable Online Experiences</p>
      </header>
      <div className="profile-container">
        <img src="King.jpeg" alt="Your Name" className="va-img" />
        <div className="profile-info">
          <h1>Vasu Arya</h1>
          <p>4+ Years of Experience</p>
        </div>
      </div>

      <h1 style={{textAlign: 'center'}}>Technologies We Use</h1>
    <TechnologyWeWorkOnNew />
      <div className="fixed-block">
        <h2>Service Details</h2>
        <p>10 Hours of professional service for one week.</p>
        <p>No weekends</p>
        <p>7 Days Delivery</p>
        <p>2 Revisions</p>
        <p>Website Design and Development</p>
        <p>Responsive and User-Friendly Design</p>
        <p>Content Management System Integration</p>
        <p>E-commerce Solutions</p>
        <p>SEO Optimization</p>
        <p>10 hours of work</p>
      </div>

      <section>
        <h2>Services We Offer</h2>
        <div>
        <div className="oval">Website Design</div>
        <div className="oval">Website Development</div>
        <div className="oval">E-commerce Websites</div>
        </div>
        <div>
        <div className="oval">Custom Web Solutions</div>
        <div className="oval">Mobile-Friendly Design</div>
        </div>
      </section>

      <section className="introduction">
        <div className="intro-text">
          <h2>Welcome to Our Website Development Services</h2>
          <p>
            We specialize in creating stunning and functional websites that
            leave a lasting impression. With our expertise in web design,
            development, and SEO, we can help your business thrive online.
          </p>
        </div>
        <div className="website-development-image">
          <img
            src="https://example.com/website-development-image.jpg"
            alt="Website Development"
          />
        </div>
      </section>

      <section>
        <h1>Why Choose Us?</h1>
        <ul>
          <li>Customized Website Solutions</li>
          <li>Responsive and Mobile-Friendly Designs</li>
          <li>SEO Optimization for Better Visibility</li>
        </ul>
      </section>

      <section className="contact">
        <p>
          {" "}
          Ready to take your online presence to the next level? Contact us today
          and let's get started on your web project.
        </p>
        <a href="/contact">Contact Us</a>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;

//       
//     </div>
//   );
// };
// export default WebsiteDevelopment;
