import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Animal from "./Animal";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/animal/lion">Ver Leão</Link> |{" "}
        <Link to="/animal/tiger">Ver Tigre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal/:name" element={<Animal />} />
      </Routes>
    </div>
  );
};

export default App;
