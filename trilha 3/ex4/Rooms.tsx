import React from "react";
import { Link } from "react-router-dom";

const rooms = [
  { id: 1, name: "Suíte Luxo" },
  { id: 2, name: "Quarto Executivo" },
  { id: 3, name: "Quarto Standard" },
];

const Rooms: React.FC = () => {
  return (
    <div>
      <h1>Quartos Disponíveis</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
