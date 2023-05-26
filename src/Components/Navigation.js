import React from "react";

function Navigation({ navpath }) {
  return (
    <div className="navigation-main">
      <span>{navpath}</span>
    </div>
  );
}

export default Navigation;
