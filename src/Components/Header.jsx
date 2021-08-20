import React, { useState } from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import { FaFacebook } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
const Header = () => {
  function GetDateTime() {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // var d = new Date(dateString);
    // var dayName = days[d.getDay()];
    var myCurrentDate = new Date();
    var date =
      days[myCurrentDate.getDay()] +
      ", " +
      month[myCurrentDate.getMonth()] +
      " " +
      myCurrentDate.getMonth() +
      ", " +
      myCurrentDate.getFullYear();

    const newCurrentDate = date;

    return (
      <div>
        <p>{newCurrentDate}</p>
      </div>
    );
  }
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  const [copied, setCopied] = useState(false);
  return (
    <>
      <div
        className="HeaderContainer"
        onMouseLeave={() => {
          setCopied(false);
        }}
      >
        <div className="HeaderTop">
          <div className="HeaderTime">{GetDateTime()}</div>
          <div className="HeaderLogo">
            <h1>Logo Goes here</h1>
          </div>
          <div className="HeaderSocial">
            {!copied ? <BsLink onClick={copy} /> : <h6 className="h6">Copied!</h6>}
            <FaFacebook />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
        </div>
        <div className="HeaderBottom">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
