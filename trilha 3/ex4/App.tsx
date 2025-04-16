import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Rooms from "./Rooms";
import RoomDetails from "./RoomDetails";
import BookingSuccess from "./BookingSuccess";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/rooms">Quartos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
      </Routes>
    </div>
  );
};

export default App;
