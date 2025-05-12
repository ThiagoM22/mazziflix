import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import avatar from "../assets/Avatar.jpg"
import logo from "../assets/Netflix.png"

const NavBar = ({ home, series, filmes }) => {
  const navigate = useNavigate(); // Hook para navegação
  const [userName, setUserName] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // Estado para o valor da pesquisa

  useEffect(() => {
    const storedName = localStorage.getItem("userName"); // Recupera o nome do localStorage
    if (storedName) {
      setUserName(storedName); // Atualiza o estado com o nome recuperado
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    if (searchQuery.trim()) {
      navigate(`/resultado?query=${searchQuery}`); // Redireciona para a página de resultados com a query
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 mt-2 mb-2" href="/Home">
            <img className="logo1" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ms-5 fs-5">
              <li className="nav-item">
                <a className={`nav-link ${home}`} href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${series}`} href="/Series">
                  Séries
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${filmes}`} href="/Filmes">
                  Filmes
                </a>
              </li>
            </ul>
            <form
              className="d-flex align-items-center me-5 gap-5"
              onSubmit={handleSearch} // Adiciona o evento de submit
            >
              <input
                className="bg-dark pesquisa text-white border-0 form-control rounded-3 text-decoration-none"
                type="search"
                placeholder="Pesquisar..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Atualiza o estado com o valor digitado
              />
              <div className="d-flex align-items-center gap-2">
                <img
                  className="rounded-3 avatar"
                  src={avatar}
                  alt="User"
                />
                {userName && (
                  <span className="text-light me-3 fs-5">
                    Bem-vindo, {userName}!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
