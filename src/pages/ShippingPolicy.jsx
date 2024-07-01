import React from "react";
import { Link } from "react-router-dom";
import line from "../assets/line.png";

function ShippingPolicy() {
  return (
    <div className="pt-24">
      <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
        Shipping Policy
      </h1>
      <img
        className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
        src={line}
        alt="line"
      />

      <div className="mt-8 ml-3 mr-3 md:text-xl text-sm md:ml-3 md:mr-3  lg:ml-40 lg:mr-40 mb-10">
        <p>
          Our facility is equipped to fulfill and complete your orders from
          anywhere in India. Our medium of shipping helps customers to save on
          transportation charges while ensuring that our oils reach our
          customers in the least possible time. We normally ship your packages
          within 1-2 business days of receipt.
        </p>

        <h1 className="font-semibold mt-5">Our Courier Partners</h1>

        <ul className="mt-5">
          <li>• FedEx</li>
          <li>• DTDC</li>
          <li>• ECOM Express</li>
          <li>• Blue Dart</li>
          <li>• Delhivery</li>
          <li>• DHL</li>
          <li>• India Post</li>
          <li>• First Flight Couriers</li>
          <li>• GoJavas</li>
          <li>• Shiprocket</li>
        </ul>

        <h1 className="font-semibold mt-5">Shipping Rates</h1>
        <p className="mt-5">As per industry standards</p>

        <h1 className="font-semibold mt-5">Free shipping:</h1>
        <p className="mt-5">We offer free shipping on all prepaid orders.</p>

        <h1 className="font-semibold mt-5">COD Shipping:</h1>
        <p className="mt-5">COD shipping delivery charges will be Rs. 50 per delivery, if enabled.</p>
        <p className="mt-5">With our knowledge, safe packaging and unparalleled standards, we stand ready to ship your parcel right. We provide you with the following so that you can remain assured of guaranteed deliver</p>

        <ul>
          <li>• Tracking number</li>
          <li>• Reference ID</li>
          <li>• Email</li>
        </ul>
        <h1 className="font-semibold">Please refer to the refund page for Return Shipping process.</h1>

        <h1 className="font-semibold mt-5">Shipping Errors</h1>
        <p className="mt-5">We check all the orders before processing so that they can reach you safely. However, mistakes may occur due to factors beyond control. If the mistake is ours (for example: received wrong package, incorrect items, missing items, etc.), we will rectify it at no extra cost. You can contact our customer care at +91 7300483669, or write to us at care@nayeshamills.com</p>
        <p className="mt-5">** Please note that larger orders can only be placed on calls or mails.</p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
