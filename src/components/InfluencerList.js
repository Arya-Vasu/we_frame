import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InfluencerCard } from "./InfluencerCard";

const InfluencerList = () => {
  const [influencerslist1, setInfluencerslist1] = useState([]);
  const [influencerslist2, setInfluencerslist2] = useState([]);

 
  useEffect(() => {
    fetch("./Influencer.json")
      .then((response) => response.json())
      .then((data) => setInfluencerslist1(data))
      .catch((error) => console.error("Error fetching influencers:", error));
  }, []);
  useEffect(() => {
    fetch("./Influencerlist.json")
      .then((response) => response.json())
      .then((data) => setInfluencerslist2(data))
      .catch((error) => console.error("Error fetching influencers:", error));
  }, []);

  const commonSettings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
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

  const slider1Settings = {
    ...commonSettings,
    rtl: false, // Set to false to move the first slider to the right (default direction)
  };

  const slider2Settings = {
    ...commonSettings,
    rtl: true, // Set to true to move the second slider to the left (opposite direction)
  };

  return (
    <div className="influencer-wall">
      <div className="influencer-slider">
        {/* <h2>Slider 1</h2> */}
        <Slider {...slider1Settings}>
          {influencerslist1.map((influencer) => (
            <InfluencerCard key={influencer.id} client={influencer}/>
          ))}
        </Slider>
      </div>
      <div className="influencer-slider">
        {/* <h2>Slider 2</h2> */}
        <Slider {...slider2Settings}>
          {influencerslist2.map((influencer) => (
            <InfluencerCard key={influencer.id} client={influencer} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default InfluencerList;
