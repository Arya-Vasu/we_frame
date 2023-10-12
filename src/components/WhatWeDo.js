import React, { useState } from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const services = [
    {
      icon: "https://tse2.mm.bing.net/th?id=OIP.ZkskytIAvvUk-tHQ-ud9oQHaDo&pid=Api&P=0&h=180",
      title: "Virtual Assistant",
      shortDescription:
        "Seamlessly manage your business tasks with the support of a dedicated virtual assistant. From administrative duties to research and scheduling, we help you focus on what matters most.",
      path: "/VirtualAssistant",
    },
    {
      icon: "https://tse3.mm.bing.net/th?id=OIP.Jg35DTU8xEFi-BbUaql9CQHaEI&pid=Api&P=0&h=180",
      title: "Website Development",
      shortDescription:
        "Transform your digital vision into a stunning reality. Our website development services combine creativity and technology to craft user-friendly, responsive, and visually captivating online experiences.",
      path: "/WebsiteDevelopment",
    },
    {
      icon: "https://tse1.mm.bing.net/th?id=OIP._yuzbd7TuzlP2VkfwcMtcQHaEK&pid=Api&P=0&h=180",
      title: "HR Management",
      shortDescription:
        "Empower your organization with strategic HR solutions. Our HR management services go beyond recruitment to streamline policy compliance, talent development, and employee engagement, fostering a culture of growth and success.",
      path: "/HRManagement",
    },
  ];

  const [flippedCards, setFlippedCards] = useState(new Array(services.length).fill(false));

  // Function to toggle the flip state of a card
  const toggleFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <section className="what-we-do">
      <div>
        <h1>What We Do</h1>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className={`service ${flippedCards[index]}`} key={index} onClick={() => toggleFlip(index)}>
            <div className="what-we-do-card">
              <div className="what-we-do-card-front">
                <img src={service.icon} alt={`Service Icon ${index + 1}`} />
                <h4>{service.title}</h4>
              </div>
              <div className="what-we-do-card-back">
                <h4>{service.title}</h4>
                <p>{service.shortDescription}</p>
                <Link to={service.path} target="_blank" rel="noopener noreferrer">Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
