import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ name: "", password: "" }); // Estado para mensagens de erro
  const home = useNavigate();

  const handleLogin = () => {
    let hasError = false;
    const newError = { name: "", password: "" };

    if (!name) {
      newError.name = "O campo Nome é obrigatório.";
      hasError = true;
    }

    if (!password) {
      newError.password = "O campo Senha é obrigatório.";
      hasError = true;
    }

    setError(newError);

    if (hasError) return; // Interrompe o login se houver erros

    localStorage.setItem("userName", name); // Armazena o nome no localStorage
    home("/Home"); // Redireciona para a página inicial
  };

  return (
    <>
      <div className="backdrop Centro">
        <div className="container w-25 d-flex flex-column p-5 LoginBackground">
          <h2 className="fw-bold fs-1">Login</h2>
          <div className="d-flex flex-column align-items-center mt-4">
            <div className="mb-3 gap-3 w-100 InputLog justify-content-center">
              <div className="mb-4">
                <input
                  className="form-control mb-2 bg-dark border-0 text-light"
                  placeholder="Nome"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Atualiza o estado com o nome digitado
                />
                {error.name && <p className="text-danger">{error.name}</p>}{" "}
                {/* Exibe o erro do campo Nome */}
              </div>
              <input
                className="form-control bg-dark border-0 text-light"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado com a senha digitada
              />
              {error.password && (
                <p className="text-danger">{error.password}</p>
              )}{" "}
              {/* Exibe o erro do campo Senha */}
            </div>
          </div>
          <button
            className="btn btn-success btnCor border-0 fw-bold fs-5 mt-5"
            onClick={handleLogin} // Chama a função para validar e salvar os dados
          >
            Entrar
          </button>
          <div className="form-check mt-2 align-items-center">
            <input
              className="cheks form-check-input border-0 bg-dark"
              type="checkbox"
            />
            <label htmlFor="" className="Remember form-check-label fs-6">
              Remember me
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
