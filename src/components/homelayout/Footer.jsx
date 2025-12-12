import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content mt-15">
      <div className="w-11/12 md:w-10/12 mx-auto px-5 py-10 flex flex-col md:flex-row justify-between gap-10">

        {/* Logo + Description */}
        <div className="space-y-3 w-[350px]">
          <img className="w-[300px]" src={logo} alt="" />
          <p className="text-sm text-gray-600">
            Your trusted source for reliable news, breaking stories, and in-depth analysis.
            Stay informed. Stay ahead.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/career" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Follow Us</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="https://www.facebook.com/" className="hover:underline">Facebook</a></li>
            <li><a href="https://x.com/" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.instagram.com/" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300 py-4">
        <p className="text-center text-sm text-gray-700">
          © {year} The Dragon News — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
