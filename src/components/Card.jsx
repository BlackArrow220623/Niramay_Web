// src/components/Card.js
import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      <img src={image} alt={title} className="w-[300px] h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-900">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
