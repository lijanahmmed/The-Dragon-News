import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <a href="https://www.facebook.com/" className="btn bg-base-100 justify-start join-item">
            <FaFacebook></FaFacebook> Facebook
          </a >
          <a href="https://x.com/" className="btn bg-base-100 justify-start join-item">
            <FaSquareXTwitter></FaSquareXTwitter> X
          </a >
          <a href="https://www.instagram.com/" className="btn bg-base-100 justify-start join-item">
            <FaInstagram></FaInstagram> Instagram
          </a >
        </div>
      </div>
    </div>
  );
};

export default FindUs;
