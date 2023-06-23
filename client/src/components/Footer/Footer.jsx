import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Myself Rahul Jagwan Currently Pursuing BE in COMPUTER ENGINEERING
            from Universal College
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Samel Pada , Nallasopara West , Mumbai , Maharashtra
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:7773990494</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: jagwanrahul25@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            T&T STORE 2023 CREATED BY JS DEV. and little modified by Rahul
            Jagwan{" "}
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
