import React from "react";
import { Link } from "react-router-dom";
import line from "../assets/line.png";
import oil1 from "../assets/oil1.png";
import Enquiries1 from "../assets/Enquiries1.png";
import Enquiries2 from "../assets/Enquiries2.png";
import Enquiries3 from "../assets/Enquiries3.png";

function Enquiries() {
  return (
    <div className="pt-24">
      <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
        Enquiries
      </h1>
      <img
        className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
        src={line}
        alt="line"
      />

      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-center">
        <div className="justify-center items-center text-center">
          <img
            className="w-[100px] mx-auto my-4 rounded-md hover:scale-110 duration-150"
            src={Enquiries1}
            alt="/"
          />
          <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
            Distibuter
          </h1>
          <Link to={"/Distibuter"} target="_top">
            <button className="px-1 py-2 mt-4 w-[100px] text-sm bg-green-600 text-white rounded hover:bg-green-800">
              Learn More
            </button>
          </Link>
        </div>
        <div>
          <div className="justify-center items-center text-center">
            <img
              className="w-[100px] mx-auto my-4 rounded-md hover:scale-110 duration-150"
              src={Enquiries2}
              alt="/"
            />
            <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
              Private Lable
            </h1>
            <Link to={"/PrivateLable"} target="_top">
              <button className="px-1 py-2 mt-4 w-[100px] text-sm bg-green-600 text-white rounded hover:bg-green-800">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="justify-center items-center text-center">
            <img
              className="w-[100px] mx-auto my-4 rounded-md hover:scale-110 duration-150"
              src={Enquiries3}
              alt="/"
            />
            <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
              Seed Supplier
            </h1>
            <Link to={"/SeedSuppler"} target="_top">
              <button className="px-1 py-2 mt-4 w-[100px] text-sm bg-green-600 text-white rounded hover:bg-green-800">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-md"
            src={oil1}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-xl font-bold py-2">
              Become A Distributor
            </h1>

            <p className="">
              Welcome to Jahu Nexus, your trusted partner in digital excellence.
              Established with a vision to empower businesses through innovative
              and results-driven digital solutions, we specialize in web
              development, digital marketing, content writing, graphic design,
              and video editing. At Jahu Nexus, we understand that every
              business is unique. That's why we offer customized services
              tailored to meet your specific needs and objectives. Our team of
              experienced professionals is dedicated to helping you navigate the
              ever-evolving digital landscape, ensuring your brand stands out
              and thrives in a competitive market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiries;
