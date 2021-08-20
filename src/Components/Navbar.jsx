import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li onClick={() => window.location.replace("/#home")} >Home</li>
        <li onClick={() => window.location.replace("/#LiteraryWorks")}>Literary Works</li>
        <li  onClick={() => window.location.replace("/#Journalism")}>Journalism</li>
        <li>Bio</li>
        <li>Resources</li>
      </ul>
    </div>
  );
};

export default Navbar;
