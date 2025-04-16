import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking-success");
  };

  return (
    <div>
      <h1>Detalhes do Quarto</h1>
      <p>
        Você está visualizando o quarto de ID: <strong>{id}</strong>
      </p>
      <button onClick={handleBooking}>Reservar este quarto</button>
    </div>
  );
};

export default RoomDetails;
