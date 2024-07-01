import React from "react";
import { Link } from "react-router-dom";
import line from "../assets/line.png";

function PrivacyPolicy() {
  return (
    <div className="pt-24">
      <h1 className="md:text-5xl text-2xl font-bold py-2 text-center">
        Privacy Policy
      </h1>
      <img
        className="md:w-[400px] w-[200px] justify-center mx-auto my-2"
        src={line}
        alt="line"
      />
      <div className="mt-8 ml-3 mr-3 md:text-xl text-sm md:ml-3 md:mr-3  lg:ml-40 lg:mr-40 mb-10">
        <p>
          At Nayesha, we are committed to protecting your privacy especially
          their rights regarding the automatic processing of personal data. We
          have implemented a privacy policy to maintain complete transparency
          with our customers regarding the processing of the personal data
          collected automatically or by them, its purpose(s) of collection, and
          how we use the data.
        </p>
        <h1 className="font-semibold mt-5">Information Collection and Use</h1>
        <p className="mt-5">
          When you visit the website, the site automatically collects certain
          information about your computing device, such as information about
          your web browser, mobile device, pages you visit, information on how
          you interact on the site, IP address, time zone, and some cookies to
          make your experience better and to provide you with our services.
        </p>
        <p className="mt-5">
          Nayesha also collects personal data that may include your name, email
          address, telephone number, and address by several means, including
          when visitors post a comment, fill the contact form, fill the shopping
          details, or provide information on the website in any form.
        </p>
        <p className="mt-5">
          This data that we collect from time to time is recorded in an
          electronic register and is used for several purposes such as
          contacting you, maintaining a (commercial) relationship with you,
          shipping your orders, etc.
        </p>

        <h1 className="font-semibold mt-5">Cookies</h1>
        <p className="mt-5">
          The website uses cookies to provide better user experience to the
          visitors of the site. Cookies” are data files that are placed on your
          device and include an anonymous unique identifier. These cookies help
          us collect data such as timestamps, browser information, internet
          service provider, etc. Cookies are generally used to retain
          information about user preferences, and storing information for
          applications like Google Analytics. The information is stored to make
          your browsing experience better and understanding how the website can
          be made better.
        </p>
        <p className="mt-5">
          You may disable cookies on the site if you don’t wish to share this
          information. You should note that without enabling cookies on the
          site, the site may not function properly.
        </p>

        <h1 className="font-semibold mt-5">Data Protection</h1>
        <p className="mt-5">
          Any personal information collected on this website is only used to
          allow you to shop or browse the store and for the purpose of providing
          you with options such as the newsletters, offers, or social media. We
          do not sell or share email addresses, phone numbers, or any other
          personal information, whether collected on this Site, by phone, or by
          any other means.
        </p>

        <h1 className="font-semibold mt-5">Data Retention</h1>
        <p className="mt-5">
          Nayesha reserves the right to retain the data for the time it deem
          necessary. It is generally retained for the time determined by the
          laws.
        </p>

        <h1 className="font-semibold mt-5">Security</h1>
        <p className="mt-5">
          Nayesha makes every attempt to secure any personal information
          provided by the users. We ensure that your data is encrypted when it
          is transmitted for purposes such as making payment and others. Except
          for third parties that are associated with us, we don’t share or sell
          your personal data for any purpose other than those mentioned on the
          site.
        </p>

        <h1 className="font-semibold mt-5">Legal Obligation</h1>
        <p className="mt-5">
          In the cases where the authorities require the personal data in
          connection with any infringement of any law or regulation, they will
          be provided with the required data after receiving a reasoned request
          by the authorities. In case of infringement, the personal data do not
          fall under the provisions of protection mentioned in this privacy
          policy.
        </p>

        <h1 className="font-semibold mt-5">Third Party</h1>
        <p className="mt-5">
          By using this website you agree to provide your consent to allow third
          parties to collect information such as your IP address, browser
          information, etc., to process your order request.
        </p>

        <h1 className="font-semibold mt-5">Changes to this Policy</h1>
        <p className="mt-5">
          Nayesha reserves the right to modify or amend this Privacy Policy at
          any time and for any reason without giving any prior notice.
        </p>

        <h1 className="font-semibold mt-5">Contact Us</h1>
        <p className="mt-5 ">
          For questions about this privacy policy, please contact:{" "}
          <a href="mailto:care@nayeshamills.com" className="hover:border-b border-black">hello@niramay.com</a>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
