import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Sell from "./components/pages/Sell/Sell";
import Buy from "./components/pages/Buy/Buy";
import Offer from "./components/pages/Offer/Offer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="buy" element={<Buy />} />
      <Route path="/offer/:id" element={<Offer />} />
    </Routes>
  );
}

export default App;
