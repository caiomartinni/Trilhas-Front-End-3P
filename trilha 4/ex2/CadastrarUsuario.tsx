import React, { useState } from "react";

const CadastrarUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    if (!nome || !email) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: nome, email }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário.");
      }

      const data = await response.json();
      setMensagem(`Usuário "${data.name}" cadastrado com sucesso!`);
      setNome("");
      setEmail("");
    } catch (err) {
      setErro("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar</button>

      {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </form>
  );
};

export default CadastrarUsuario;
