import { useNavigate } from "react-router";
const NavBar = ({ home, series, filmes }) => {
  const navigateSeries = useNavigate("/src/page/Series.jsx");
  const navigateMovies = useNavigate("/src/page/Filmes.jsx");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/">
            <img src="https://placehold.co/200x80" alt="Logo" />
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
                <a className={`nav-link ${home}`} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${series}`}
                  onClick={navigateSeries}
                  href="/Series"
                >
                  Séries
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${filmes}`}
                  onClick={navigateMovies}
                  href="/Filmes"
                >
                  Filmes
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center me-5 gap-5">
              <input
                className=" bg-dark pesquisa text-white border-0 rounded-3 text-decoration-none"
                type="search"
                placeholder="Pesquisar..."
                aria-label="Search"
              />
              <img
                className="rounded-3"
                src="https://placehold.co/70x70"
                alt="User"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
