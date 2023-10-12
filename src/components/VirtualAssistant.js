/* Inside the VirtualAssistant.js component */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const VirtualAssistant = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true);
  //   }
  // })
  const vaServices = [
    "10 Hours of professional service for one week",
    "No Weekends",
    "7 Days Delivery",
    "2 Revisions",
    "Travel Planning",
    "Basic Photo Editing",
    "Organize, Classify, or Tag Your Files",
    "Project Management Support",
    "Formatting & Clean Up",
    "10 Hours of Work",
  ];

  return (
    <div className="Va-page">
      <header className="va-header">
        <h1>Virtual Assistant Services</h1>
        <p>Elevate Your Brand with Our Virtual Assistants</p>
      </header>
      <div className="main-va-div">
        <div className="rightDiv">
          <h2>Service Details</h2>
          <ul className="serviceList">
            {vaServices.map((vaService) => (
              <li className="serviceListItems"><FontAwesomeIcon icon={faCheck} /> {" "} {vaService}</li>
            ))}
          </ul>
        </div>
        <div className="leftDiv">
          <section>
            <h2>Services We Offer</h2>
            <div>
              <div className="oval">Scheduling and Calendar Management</div>
              <div className="oval">Data Entry</div>
              <div className="oval"> Travel planning </div>
            </div>
            <div>
              <div className="oval">Reminders before the meetings</div>
              <div className="oval"> Handling Gsuit </div>
              <div className="oval">
                File conversion- convert PDF to Word/ PDF to Excel etc
              </div>
            </div>
          </section>

          <section className="introduction">
            {/* Updated introduction content */}
            <div className="intro-text">
              <h2>Welcome to Our Virtual Assistant Services</h2>
              <p>
                With over two years of experience, we offer top-notch virtual
                assistant services to help you manage your business tasks
                efficiently. From scheduling and research to email management,
                we've got you covered.
              </p>
            </div>
            <div className="virtual-assistant-image">
              {/* Add an image of a virtual assistant */}
              {/* <img
                src="https://example.com/virtual-assistant-image.jpg"
                alt="Virtual Assistant"
              /> */}
            </div>
          </section>
          <section>
            <h1>Significance of Choosing us!</h1>
            <ul>
              <li>Confidentiality of your valuable document</li>
              <li>Quality assurance virtual assistant services</li>
              <li>Timely delivery</li>
            </ul>
          </section>
          <section className="contact">
            {/* Updated contact section */}
            <p>
              {" "}
              Our goal is to become an integral part of your team, allowing you
              to focus on what you do best while we handle the rest.
            </p>
            <a href="/contact">Contact Us</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;

// const VirtualAssistant = () => {
//   // const [isScrolled, setIsScrolled] = useState(false);
//   // window.addEventListener('scroll', () => {
//   //   if (window.scrollY > 100) {
//   //     setIsScrolled(true);
//   //   }
//   // })

//   return (
//     <div className="Va-page">
//       <header>
//         <h1>Virtual Assistant Services</h1>
//         <p>Elevate Your Brand with Our Virtual Assistants</p>
//       </header>
//       <div>
//         <div className="profile-container">
//           {/* <img src=" Barkha.jpeg" alt="Barkha" className="va-img" />
//           <div className="profile-info">
//             <h1>Shreya ambar</h1>
//             <p>3+ years of experience</p>
//           </div> */}

//           <div className="fixed-block">
//           {/* <div className={isScrolled ? "moving-block" : "fixed-block"}> */}
//             <h2>Service Details</h2>
//             <p>10 Hours of professional service for one week.</p>
//             <p>No weekends</p>
//             <p>7 Days Delivery</p>
//             <p>2 Revisions</p>
//             <p>Travel planning</p>
//             <p>Basic photo editing</p>
//             <p>Organize, classify, or tag your files</p>
//             <p>Project management support</p>
//             <p>Formatting & clean up</p>
//             <p>10 hours of work</p>
//           </div>
//         </div>
//         <section>
//           <h2>Services We Offer</h2>
//           <div>
//             <div className="oval">Scheduling and Calendar Management</div>
//             <div className="oval">Data Entry</div>
//             <div className="oval"> Travel planning </div>
//           </div>
//           <div>
//             <div className="oval">Reminders before the meetings</div>
//             <div className="oval"> Handling Gsuit </div>
//             <div className="oval">
//               File conversion- convert PDF to Word/ PDF to Excel etc
//             </div>
//           </div>
//         </section>

//         <section className="introduction">
//           {/* Updated introduction content */}
//           <div className="intro-text">
//             <h2>Welcome to Our Virtual Assistant Services</h2>
//             <p>
//               With over two years of experience, we offer top-notch virtual
//               assistant services to help you manage your business tasks
//               efficiently. From scheduling and research to email management,
//               we've got you covered.
//             </p>
//           </div>
//           <div className="virtual-assistant-image">
//             {/* Add an image of a virtual assistant */}
//             <img
//               src="https://example.com/virtual-assistant-image.jpg"
//               alt="Virtual Assistant"
//             />
//           </div>
//         </section>
//       </div>
//       <section>
//         <h1>Significance of Choosing us!</h1>
//         <ul>
//           <li>Confidentiality of your valuable document</li>
//           <li>Quality assurance virtual assistant services</li>
//           <li>Timely delivery</li>
//         </ul>
//       </section>
//       <section className="contact">
//         {/* Updated contact section */}
//         <p>
//           {" "}
//           Our goal is to become an integral part of your team, allowing you to
//           focus on what you do best while we handle the rest.
//         </p>
//         <a href="/contact">Contact Us</a>
//       </section>
//     </div>
//   );
// };

// export default VirtualAssistant;
