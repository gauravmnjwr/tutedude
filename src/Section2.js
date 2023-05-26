import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import FriendsReffered from "./Components/FriendsReferred";
import EnrolledFriends from "./Components/EnrolledFriends";

import React from "react";

function Section2() {
  return (
    <>
      <Navbar />
      <Navigation navpath="UI/UX > Refer & Earn > Friends Referred" />
      <FriendsReffered />
      <EnrolledFriends />
    </>
  );
}

export default Section2;
