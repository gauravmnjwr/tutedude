import EnrolledFriends from "./Components/EnrolledFriends";
import FriendsReffered from "./Components/FriendsReferred";
import Navbar from "./Components/Navbar";
import Navigation from "./Components/Navigation";
import ReferScreen from "./Components/ReferScreen";
import Section1 from "./Section1";
import Section2 from "./Section2";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/referred" element={<Section2 />} />
      </Routes>
    </Router>
  );
}

export default App;
