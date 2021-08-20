import React from "react";
import "./footer.scss";
import emailjs from "emailjs-com";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="FooterWrapper">
          <div className="FooterLeft">
            <div className="Media">
              <h1>Media Query</h1>
            </div>
          </div>
          <div className="FooterRight">
            <div className="socialFooter">
              <FaFacebook />
              <AiFillTwitterCircle />
              <AiFillYoutube />
            </div>
            <div className="NewsletterContainer">
              <div className="Newsletter">
                <h2>top stories in your inbox</h2>
                <p>
                  Free weekly newsletter featuring stories curated by our
                  editors, delivered directly to you.
                </p>
                <form className="contact-form">
                  {/* <form className="contact-form" onSubmit={sendEmail}> */}
                  <input type="email" placeholder="Your Email Address" name="user_email" />
                  <input className="submitBtn" type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
