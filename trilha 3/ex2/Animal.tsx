import React from "react";
import { useParams } from "react-router-dom";

const Animal: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>Animal:</h1>
      <p>
        O nome do animal é: <strong>{name}</strong>
      </p>
    </div>
  );
};

export default Animal;
