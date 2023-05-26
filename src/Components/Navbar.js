import React from "react";
import downarrow from "../assets/downarrow.png";
import downarrowwhite from "../assets/downarrowwhite.png";
import logo from "../assets/image 1.png";
import profileimg from "../assets/Vector.png";

function Navbar() {
  return (
    <div className="main-navbar">
      <div>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div>
        <div className="hidden">My Assignment</div>
        <div className="hidden">Chat With Mentor</div>
        <div className="profile-name">
          <div className="hidden">
            <img src={profileimg} alt="" />
          </div>
          <div style={{ fontWeight: "600" }}>ProfileName</div>
          <div className="hidden">
            <img src={downarrow} alt="" />
          </div>
          <div className="downarrowwhite">
            <img src={downarrowwhite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
