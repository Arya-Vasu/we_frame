import React from "react";

const WhyChoseUs = () => {
  const benefits = [
    {
      name: "Experience",
      details:
        "With over two years of experience as a virtual assistant, we bring valuable expertise to your tasks.",
      img: "https://i.pinimg.com/474x/c3/67/76/c367767cbcca29a681fc1301783eef01.jpg",
    },
    {
      name: "Reliability",
      details:
        "We are dedicated to delivering reliable and high-quality services to meet your business needs.",
      img: "https://i.pinimg.com/474x/0f/c0/60/0fc0605d1e5707d43249202eec5b1de9.jpg",
    },
    {
      name: "Customization",
      details:
        "We tailor our virtual assistant services to match your specific requirements and preferences.",
      img: "https://i.pinimg.com/474x/04/12/b1/0412b1a8d38cdf7e7e68dafafb475ac7.jpg",
    }
  ];
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="choose-us-content">
        {benefits.map((benefit) => (
          <div className="choose-us-item">
            <img src={benefit.img} alt={benefit.name} />
            <h3>{benefit.name}</h3>
            <p>{benefit.details}</p>
          </div>
        ) )}
      </div>
    </section>
  );
};

export default WhyChoseUs;
