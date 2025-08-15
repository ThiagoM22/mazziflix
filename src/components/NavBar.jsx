import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import avatar from "../assets/Avatar.jpg";
import logo from "../assets/Netflix.png";

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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand ms-2 ms-md-5 mt-2 mb-2" href="/Home">
            <img
              className="logo1"
              src={logo}
              alt="Logo"
              style={{ maxHeight: "40px" }}
            />
          </a>

          {/* Botão toggle para mobile */}
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

          {/* Conteúdo colapsável */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Links de navegação */}
            <ul className="navbar-nav me-auto ms-0 ms-lg-5 fs-5">
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

            {/* Área de busca e usuário */}
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center me-0 me-lg-5 gap-3 gap-lg-5 mt-3 mt-lg-0">
              {/* Formulário de busca */}
              <form
                className="d-flex w-100"
                onSubmit={handleSearch}
                style={{ maxWidth: "300px" }}
              >
                <input
                  className="bg-dark pesquisa text-white border-0 form-control rounded-3 text-decoration-none"
                  type="search"
                  placeholder="Pesquisar..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              {/* Área do usuário */}
              <div className="d-flex align-items-center gap-2 flex-shrink-0">
                <img
                  className="rounded-3 avatar"
                  src={avatar}
                  alt="User"
                  style={{ width: "40px", height: "40px" }}
                />
                {userName && (
                  <span className="text-light fs-6 fs-lg-5 d-none d-sm-inline">
                    Bem-vindo, {userName}!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
