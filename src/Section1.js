import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import ReferScreen from "./Components/ReferScreen";

import React from "react";

function Section1() {
  return (
    <>
      <Navbar />
      <Navigation navpath="UI/UX > Refer & Earn" />
      <ReferScreen />
    </>
  );
}

export default Section1;
