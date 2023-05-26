import React from "react";
import rs_img from "../assets/rs.png";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector (2).png";
import vector3 from "../assets/Vector (3).png";
import vector4 from "../assets/Vector (4).png";

function ReferScreen() {
  return (
    <div className="refer-main">
      <div className="refer-earn">
        <div className="refer-earning">
          <div className="refer-earning1">
            <div className="earning-tab1">Refer Earning</div>
            <div className="earning-tab2">R 2,500</div>
          </div>
          <div className="refer-earning2">
            <div className="earning-tab1">Total Refferels</div>
            <div className="earning-tab2">7</div>
          </div>
          <div className="refer-earning3">
            <div className="earning-tab1">Wallet Balance</div>
            <div className="earning-tab2">R 500</div>
          </div>
          <button>Withdraw Balance</button>
        </div>
        <div className="ref-code">
          <div className="ref-code1">Your Refferel Code</div>
          <div className="ref-code2">
            <span>E</span>
            <span>D</span>
            <span>C</span>
            <span>H</span>
            <span>5</span>
            <span>4</span>
          </div>
        </div>
      </div>
      <div className="refer-info">
        <div className="how-it-works">How Does It Work ?</div>
        <div className="refer-instructions">
          <div>
            <div className="instruction-img">
              <img src={vector1} alt="" />
            </div>
            <div className="instruction-info">
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                Invite your friends
              </div>
              <div style={{ fontSize: "16px", color: "#4D4D4D" }}>
                Share the link tutedude.com with your friends
              </div>
            </div>
          </div>
          <div>
            <div className="instruction-img">
              <img src={vector3} alt="" />
            </div>
            <div className="instruction-info">
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                Invite your friends
              </div>
              <div style={{ fontSize: "16px", color: "#4D4D4D" }}>
                Using your REFERRAL CODE in the payments page
              </div>
            </div>
          </div>
          <div>
            <div className="instruction-img">
              <img src={rs_img} alt="" />
            </div>
            <div className="instruction-info">
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                Invite your friends
              </div>
              <div style={{ fontSize: "16px", color: "#4D4D4D" }}>
                On total purchase the friend makes, into your wallet{" "}
              </div>
            </div>
          </div>
          <div>
            <div className="instruction-img">
              <img src={vector4} alt="" />
            </div>
            <div className="instruction-info">
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                Invite your friends
              </div>
              <div style={{ fontSize: "16px", color: "#4D4D4D" }}>
                On his overall fee on successful purchase using your referral
                code
              </div>
            </div>
          </div>
          <div>
            <div className="instruction-img">
              <img src={vector2} alt="" />
            </div>
            <div className="instruction-info">
              <div style={{ fontSize: "16px", fontWeight: "500" }}>
                Invite your friends
              </div>
              <div style={{ fontSize: "16px, color:'#4D4D4D'" }}>
                When the wallet balance reaches ₹200 or more, you can withdraw
                it
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="ref-link">
        <a href="/referred">Friends Who Enrolled</a>
        <a href="/">Terms and Conditions</a>
      </span>
    </div>
  );
}

export default ReferScreen;
