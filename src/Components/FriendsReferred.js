import React from "react";

function FriendsReffered() {
  return (
    <div className="friends-page">
      <div>
        <span>Your Referrel Code</span>
        <div>
          <div className="shared-code">
            <span>E</span>
            <span>D</span>
            <span>C</span>
            <span>H</span>
            <span>5</span>
            <span>4</span>
          </div>
          <div className="shared-balance">
            <div style={{ color: "#800080", fontWeight: "600" }}>
              Wallet Balance
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Rs 500
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsReffered;
