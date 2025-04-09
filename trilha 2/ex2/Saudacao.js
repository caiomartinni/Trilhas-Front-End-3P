import React, { useState } from "react";

const Saudacao = ({ nomeInicial }) => {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
};

export default Saudacao;
