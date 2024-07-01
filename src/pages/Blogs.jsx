import React from 'react';
import line from "../assets/line.png";
import oil12 from "../assets/oil12.png";
import CardList from '../components/CardList';

function Blogs() {
  return (
    <div className="pt-24">
      <div>
        <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
          Blogs
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />
      </div>
      <div className="w-full bg-white py-5 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-md"
            src={oil12}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <h1 className='text-xl md:text-3xl font-bold hover:text-blue-500'>Best Cooking Oils for People With Diabetes</h1>
            <p className=" text-sm md:text-lg font-bold ">
            Diabetes is a chronic condition that affects millions of people worldwide by disrupting the body's ability to regulate...
            </p>
            <button className="px-1 py-2 mt-4 w-[100px] bg-green-600 text-white rounded hover:bg-green-800">Read More</button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-9 px-4">

        <CardList/>
      </div>

    </div>
  )
}

export default Blogs