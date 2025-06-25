import React from "react";
import { useNavigate } from "react-router-dom";
import AIImage from "../assets/AI.jpeg";
import Image7 from "../assets/content7.jpeg";
import Image2 from "../assets/Web1.jpeg";
import Image3 from "../assets/logo3.jpeg";
import Image5 from "../assets/Smo5.jpeg";
import Image6 from "../assets/video6.jpeg";
import Image8 from "../assets/image8.png";

import "./Cards.css"; // Import the CSS file

const cardData = [
  { title: "AI Services", text: "Leverage AI solutions.", image: AIImage },
  { title: "Web Development", text: "Develop websites.", image: Image2 },
  { title: "Logo Design", text: "Create professional logos.", image: Image3 },
  { title: "Digital Marketing", text: "Boost brand presence.", image: Image5 },
  { title: "Video Editing", text: "Professional video editing.", image: Image6 },
  { title: "Product Photography", text: "High-quality images.", image: Image8 },
  { title: "Graphic Design", text: "Creative graphic designs.", image: AIImage },
  { title: "Content Writing", text: "SEO-friendly content.", image: Image7 },
];

const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/service-providers/${category}`);
  };

  return (
    <div className="custom-cards-container">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="custom-card"
          style={{ backgroundImage: `url(${card.image})` }}
          onClick={() => handleCardClick(card.title)}
        >
          <div className="custom-card-body">
            <h5 className="custom-card-title">{card.title}</h5>
            <p className="custom-card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
