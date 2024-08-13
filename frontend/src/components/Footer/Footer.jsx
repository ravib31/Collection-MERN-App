import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to रV Collection, your one-stop destination for all things
            fashion, lifestyle, and more.Shop with confidence and discover why
            we're the preferred choice for savvy shoppers everywhere!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
           Contact No-9198978261
          </span>
          <span>
           Email-Ravibhashkar0102@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">रV Collection</span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
