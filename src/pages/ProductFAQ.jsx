
import React, { useState } from 'react';
import FAQ from '../components/FAQ';
import line from "../assets/line.png";

const ProductFAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    { question: "What is cold pressed oil?", answer: "Cold pressed oil is made using a method that doesn't involve high temperatures or chemicals, retaining more nutrients and flavors." },
    { question: "Is cold pressed oil better?", answer: "Cold pressed oils are often considered better due to their higher nutritional value and better flavor compared to refined oils." },
    { question: "Why buy cold pressed oil?", answer: "Cold pressed oils are healthier, have a richer flavor, and are free from harmful chemicals." },
    { question: "Are cold pressed oils good for cooking?", answer: "Yes, cold pressed oils can be used for cooking, but it's best to use them in low to medium heat cooking to retain their nutrients." },
    { question: "Is Cold Pressed Oil Good for Hair?", answer: "Yes, cold pressed oils are excellent for hair care, providing essential nutrients and promoting healthy hair growth." },
  ];
  
  return (
    <div className="pt-24">
      <div className="">
      <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
          FAQ'S
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />

        <div className="w-full md:w-[1300px] mb-10 mt-7 md:ml-40 ">
          {/* <p className="md:text-2xl text-lg font-bold py-2 text-center md:text-left">Have questions? We have the answers</p> */}
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b md:text-xl text-lg ">
              <div
                className="flex justify-between font-bold items-center md:text-2xl text-lg cursor-pointer py-2"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex items-center md:text-2xl text-lg">
                  <span className="mr-2 font-bold">{index + 1}<span></span></span>
                  <span > {faq.question}</span>
                </div>  
                <span className="font-bold text-lg md:text-2xl bg-[#4adc4c] p-3 rounded-lg">{selectedQuestion === index ? '-' : '+'}</span>
              </div>
              {selectedQuestion === index && <p className="py-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductFAQ