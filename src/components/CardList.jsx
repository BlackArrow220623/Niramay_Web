// src/components/CardList.js
import React from 'react';
import Card from './Card';
import oil12 from "../assets/oil12.png";

const CardList = () => {
  const cards = [
    {
      image: oil12,
      title: 'What You Need to Know About Yellow Mustard Oil',
      description: 'Have you ever wondered what gives mustard its tongue-tingling taste? That flavour comes from an oil hidden inside...',
    },
    {
      image: oil12,
      title: 'Health Benefits and Uses of Cold Pressed Ground...',
      description: 'The choices we make in our kitchens play a significant role in our overall health and wellness. Among...',
    },
    {
      image: oil12,
      title: 'Sesame Oil Unveiled: Choosing Between Tradition...',
      description: 'Sesame oil is a flavorful staple in kitchens and pantries across the globe. This amazing oil is not...',
    },
    {
        image: oil12,
        title: 'Sesame Oil Unveiled: Choosing Between Tradition...',
        description: 'Sesame oil is a flavorful staple in kitchens and pantries across the globe. This amazing oil is not...',
      },

      {
        image: oil12,
        title: 'Sesame Oil Unveiled: Choosing Between Tradition...',
        description: 'Sesame oil is a flavorful staple in kitchens and pantries across the globe. This amazing oil is not...',
      },

      {
        image: oil12,
        title: 'Sesame Oil Unveiled: Choosing Between Tradition...',
        description: 'Sesame oil is a flavorful staple in kitchens and pantries across the globe. This amazing oil is not...',
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      {/* <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-2">
            <li><a href="#" className="px-3 py-1 bg-orange-500 text-white rounded">1</a></li>
            <li><a href="#" className="px-3 py-1 border rounded">2</a></li>
            <li><a href="#" className="px-3 py-1 border rounded">3</a></li>
            <li><a href="#" className="px-3 py-1 border rounded">4</a></li>
            
            <li><a href="#" className="px-3 py-1 border rounded">&gt;</a></li>
          </ul>
        </nav>
      </div> */}
    </div>
  );
};

export default CardList;
