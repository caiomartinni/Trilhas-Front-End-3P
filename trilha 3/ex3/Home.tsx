import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Ir para a página About</button>
    </div>
  );
};

export default Home;
