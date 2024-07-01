import React from "react";
import { Link } from "react-router-dom";
import line from "../assets/line.png";

function RefundPolicy() {
  return (
    <div className="pt-24">
      <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
        Refund & Return Policy
      </h1>
      <img
        className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
        src={line}
        alt="line"
      />

      <div className="mt-8 ml-3 mr-3 md:text-xl text-sm md:ml-3 md:mr-3  lg:ml-40 lg:mr-40 mb-10">
        <p>
          Please read the policy, conditions and process carefully as they
          highlight the important information & guidelines regarding your rights
          and obligations as our customer, concerning any product’s purchase.
        </p>
        <p className="mt-5">
          “Company,” “we,” “us,” or “our,” refers to Nayesha that is responsible
          for your information under this Return & Refund Policy. Customer:
          refers to the company, organization or person who signs up on our
          website to purchase the product.
        </p>

        <h1 className="font-semibold mt-5">Damaged Or Defective Products</h1>
        <p className="mt-5">
          If a damaged or wrong product is being delivered to you, the customer
          is eligible for product exchange. Customers have to provide pictures
          of the damaged product on the provided contact details and after
          verification, the customer will be eligible to receive an exchange. If
          you receive a leaking bottle, send us images at below whatsapp no or
          email us at the earliest and we will get back to you. Once confirmed
          by the customer experience team, new product will be provided and
          shipped the next day itself after confirmed by our team.
        </p>

        <h1 className="font-semibold mt-5">Product Lost In Transit</h1>
        <p className="mt-5">
          If the product is lost in transit or returned to our manufacturing
          facility, the full amount will be refunded to your account.
        </p>

        <h1 className="font-semibold mt-5">Cancellation Policy</h1>
        <p className="mt-5">
          Once the order is shipped from our facility, it cannot be cancelled by
          the customer. It can only be done before the shipping of the product.
        </p>

        <h1 className="font-semibold mt-5">Return Policy</h1>
        <p className="mt-5">
          You can return the product within 7 days of the delivery, after 07
          days we will not offer refund or exchange. To be eligible for a return
          / exchange, your product must be unused and in the same condition that
          you received it. It must also be in the original packaging. We may
          refuse returns where it's obvious that the cap seal is broken. COD
          orders can only be refunded for store cash.
        </p>

        <h1 className="font-semibold mt-5">Return Process</h1>
        <p className="mt-5">
          You can only apply for a return by contacting us on the below email
          address or whatsapp no. Please mention your order order id / invoice
          number while contacting us for a smoother experience.
        </p>
        <p className="mt-5">
          We do not have a reverse pick up facility, we request you to self-ship
          the product to us. We will provide you a 100 rupees discount coupon
          instead of the shipping cost.
        </p>

        <h1 className="font-semibold mt-5">How to I self-ship the products?</h1>
        <p className="mt-5">
          Please pack the items securely to prevent any loss or damage during
          transit. All items must be in unused condition with the original
          invoice and packaging intact. You can courier the product(s) to the
          address mentioned by our customer experience team. Once we receive the
          product, our team will get in touch with you for the refund / exchange
          process and complete the process within 24-48 hours of receiving the
          product.
        </p>

        <p className="mt-5">
          For more queries, call us at{" "}
          <a href="tel:+917300483669" className="hover:border-b border-black">
            +91 7300483669
          </a>
          , or write to us at{" "}
          <a
            href="mailto:care@nayeshamills.com"
            className="hover:border-b border-black"
          >
            hello@niramay.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;
