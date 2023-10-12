// // WhatWeDo.js
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TechnologyWeWorkOnNew = () => {
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupContent, setPopupContent] = useState({});

  const tech = [
    {
      icon: "https://w0.peakpx.com/wallpaper/214/158/HD-wallpaper-html5-logo-white-silk-texture-html5-emblem-programming-language-html-silk-background.jpg",
      title: "HTML5",
      shortDescription: "Shreya to provide the data.",
      description: "Shreya to provide the data.",
    },
    {
      icon: "https://www.robinheed.com/wp-content/uploads/2016/04/css3.jpg",
      title: "CSS3",
      shortDescription: "Shreya to provide the data.",
      description: "Shreya to provide the data.",
    },
    {
      icon: "https://wallpaperaccess.com/full/8085076.png",
      title: "ReactJS",
      shortDescription: "Shreya to provide the data.",
      description: "Shreya to provide the data.",
    },
    {
      icon: "https://wallpaperaccess.com/full/6953608.jpg",
      title: "MaterialUI",
      shortDescription: "Shreya to provide the data.",
      description: "Shreya to provide the data.",
    },
    {
      icon: "https://www.adlice.com/wp-content/uploads/2017/01/0001494_search-engine-powered-by-mongodb.jpeg",
      title: "MongoDB",
      shortDescription: "Shreya to provide the data.",
      description: "Shreya to provide the data.",
    },
    {
      icon: "https://e0.pxfuel.com/wallpapers/86/808/desktop-wallpaper-js-node-js.jpg ",
      title: "NodeJS",
      shortDescription: "Shreya to provide the data.",
      description: "Shreya to provide the data.",
    },
  ];

  // Function to handle clicking on a service card
  // const handleServiceClick = (tech) => {
  //   setShowPopup(true);
  //   setPopupContent(tech);
  // };

  // Function to close the popup
  // const closePopup = () => {
  //   setShowPopup(false);
  //   setPopupContent({});
  // };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="tech-we-use">
       <Slider {...settings}>
      {tech.map((tech, index) => (
        <div
          className="hexagon-container"
          key={index}
        >
          <h4>{tech.title}</h4>
          <div className="hexagon">
            <img
              src={tech.icon}
              alt={`Service Icon ${index + 1}`}
              style={{ objectFit: "cover" }}
              className="hexagon-image"
            />
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );



  // return (
  //   <section className="tech-we-use">
  //     {tech.map((tech, index) => (
  //       <div
  //         className="hexagon-container"
  //         key={index}
  //         onClick={() => handleServiceClick(tech)}
  //       >
  //         <h4>{tech.title}</h4>
  //         <div className="hexagon">
  //           <img
  //             src={tech.icon}
  //             alt={`Service Icon ${index + 1}`}
  //             style={{ objectFit: "cover" }}
  //             className="hexagon-image"
  //           />
  //         </div>
  //       </div>
  //     ))}
  //     {showPopup && (
  //       <div className="popup">
  //         <div className="popup-content">
  //           <h4>{popupContent.title}</h4>
  //           <p>{popupContent.description}</p>
  //           <button onClick={closePopup}>Close</button>
  //         </div>
  //       </div>
  //     )}
  //   </section>
  // );
}

export default TechnologyWeWorkOnNew;
