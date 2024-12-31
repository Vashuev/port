import React from "react";
import "./digitalCard.scss"; // Add this for styling

// Dynamically import all images from the "images" folder
const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

// Import all images in the folder
const images = importAll(require.context("../../images/cards", false, /\.(png|jpe?g|svg)$/));

// Generate business cards data with names based on file names
const businessCards = images.map((image, index) => {
  const fileName = image.split("/").pop().split(".")[0]; // Extract file name without extension
  const formattedName = fileName
    .replace(/[-_]/g, " ") // Replace dashes/underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

  return {
    id: index + 1,
    name: formattedName,
    image: image,
  };
});

const DigitalBusinessCards = () => {
  return (
    <div className="digital-business-cards-container">
      <h1>Digital Business Cards</h1> {/* Top title */}
      <div className="business-cards-grid">
        {businessCards.map((card) => (
          <div key={card.id} className="business-card">
            <img src={card.image} alt={`${card.name}'s card`} />
            <h3 className="business-card-name">{card.name}</h3> {/* Name moved below the card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalBusinessCards;
