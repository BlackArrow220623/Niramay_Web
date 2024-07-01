import React from "react";
import { Link } from 'react-router-dom';
import line from "../assets/line.png";
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import contact4 from "../assets/contact4.png";
import { MdCall, MdMail } from "react-icons/md";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dea49b9c-81a1-42d7-935f-cd9f845a71bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="pt-24">
      <div className="p-5">
        <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
          Contact Us
        </h1>
        <img
          className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
          src={line}
          alt="line"
        />
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-center">
          <div className="justify-center items-center text-center">
            <img
              className="w-[100px] mx-auto my-4 rounded-md hover:scale-110 duration-150"
              src={contact1}
              alt="/"
            />
            <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
              PRODUCT FAQ’S
            </h1>
            <Link to={"/ProductFAQ"}  target="_top" >
            <button className="px-1 py-2 mt-4 w-[100px] text-sm bg-green-600 text-white rounded hover:bg-green-800">
              Find Answers
            </button>
            </Link>
          </div>
          <div>
            <div className="justify-center items-center text-center">
              <img
                className="w-[100px] mx-auto my-4 rounded-md hover:scale-110 duration-150"
                src={contact2}
                alt="/"
              />
              <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
                PRIVACY POLICY
              </h1>
              <Link to={"/PrivacyPolicy"}  target="_top" >
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
                src={contact3}
                alt="/"
              />
              <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
                REFUND POLICY
              </h1>
              <Link to={"/RefundPolicy"}  target="_top" >
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
                src={contact4}
                alt="/"
              />
              <h1 className="md:text-2xl text-xl font-bold py-2 text-center">
                SHIPPING POLICY
              </h1>
              <Link to={"/ShippingPolicy"}  target="_top" >
              <button className="px-1 py-2 mt-4 w-[100px] text-sm bg-green-600 text-white rounded hover:bg-green-800">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 mt-2 px-4">
        <div className="flex flex-[100%] flex-col items-center justify-center">
          <div className="container mx-auto p-4 md:flex md:space-x-8">
            <div className="md:w-2/3">
            <h1 className="text-center md:text-3xl text-2xl font-semibold">STILL CAN'T FIND WHAT YOU'RE LOOKING FOR?CONTACT US HERE!</h1>
              <form
                onSubmit={onSubmit}
                className="space-y-4 bg-white p-6 rounded-lg shadow-md"
              >
                <div className="grid md:grid-cols-2">
                  <div>
                  <label className="block text-black font-semibold">First Name</label>
                  <input
                    className="border border-black lg:w-[400px] mt-2 rounded-lg py-2 px-3 text-gray-700 lead"
                    type="text"
                    name="Firstname"
                    placeholder="Enter Your First Name"
                    required
                  ></input>
                  </div>

                  <div>
                  <label className="block text-black font-semibold">Last Name</label>
                  <input
                    className="border border-black lg:w-[400px] mt-2 rounded-lg py-2 px-3 text-gray-700 lead"
                    type="text"
                    name="Lastname"
                    placeholder="Enter Your Last Name"
                    required
                  ></input>
                  </div>
                </div>

                <div className="grid md:grid-cols-2">

                <div className="flex flex-col ">
                  <label className="block text-black font-semibold ">
                    Phone Number
                  </label>
                  <input
                    className="border border-black lg:w-[400px] mt-2 rounded-lg py-2 px-3 text-gray-700 lead"
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Mobile"
                    required
                  ></input>
                </div>

                <div className="flex flex-col  ">
                  <label className="block text-black font-semibold ">
                    Email Address
                  </label>
                  <input
                    className="border border-black lg:w-[400px] mt-2 rounded-lg py-2 px-3 text-gray-700 lead"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  ></input>
                </div>

                </div>

                <div>
            <label className="block text-black font-semibold">Please choose the option Below</label>
            <select
            type="text"
            name="select"
            required
            className="border border-black w-[220px] md:w-[400px] lg:w-[850px] mt-2 rounded-lg py-2 px-3 text-gray-700 lead">
              <option>Please select an option</option>
              <option>I Want to buy the products in bulk</option>
              <option>The Bolttle is Leaking or Defective</option>
              <option>The Product I received is wrong</option>
              <option>I have refund related query</option>
              <option>Other</option>
            </select>
          </div>



                <div className="flex flex-col ">
                  <label className="block text-black font-semibold mb-5">
                    Write your messages here
                  </label>
                  <textarea
                    className="border border-black lg:w-[850px] rounded-lg py-2 px-3 text-gray-700 lead"
                    id="massage"
                    name="massage"
                    rows="6"
                    placeholder="Enter Your Massage"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#47ffff] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black"
                >
                  Submit
                </button>
              </form>

              <span>{result}</span>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-20">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
                <div className="mb-4">
                  <p className="font-bold">Address 1:-</p>
                  <p>
                    B-6, 2nd Floor, Mahalaxmi Nagar, Malviya Nagar, Jaipur–
                    302017
                  </p>
                  <p>Landmark: Behind World Trade Park</p>
                </div>
                <div className="mb-4">
                  <p className="font-bold">Address 2:-</p>
                  <p>
                    Khasra no 180-186, Pyariwas, Teh- Nangal Rajawatan, Dist -
                    Dausa, Rajasthan
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <MdCall size={24}/>
                  <span className="text-gray-700">+91 7300483669</span>
                </div>
                <div className="flex items-center">
                  <MdMail size={24}/>
                  <span className="text-gray-700">hello@niramay.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
