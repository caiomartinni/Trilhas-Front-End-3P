import React, { useState } from "react";

type Usuario = {
  id: number;
  name: string;
  email: string;
};

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    setErro("");
    setUsuario(null);

    if (!id) {
      setErro("Por favor, informe um ID.");
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      const data: Usuario = await response.json();
      setUsuario(data);
    } catch (err) {
      setErro("Usuário não encontrado.");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Digite o ID do usuário"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {usuario && (
        <div>
          <h3>Dados do Usuário:</h3>
          <p>
            <strong>Nome:</strong> {usuario.name}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
        </div>
      )}

      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
};

export default BuscarUsuario;
