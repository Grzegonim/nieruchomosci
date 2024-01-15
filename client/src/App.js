import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Sell from "./components/pages/Sell/Sell";
import Buy from "./components/pages/Buy/Buy";
import Offer from "./components/pages/Offer/Offer";
import Contact from "./components/pages/Contact/Contact";
import AddOffer from "./components/pages/AddOffer/AddOffer";
import Tour from "./components/pages/Tour/Tour";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="buy" element={<Buy />} />
      <Route path="/offer/:id" element={<Offer />} />
      <Route path="offer/add" element={<AddOffer />} />
      <Route path="/tour" element={<Tour />} />
    </Routes>
  );
}

export default App;
