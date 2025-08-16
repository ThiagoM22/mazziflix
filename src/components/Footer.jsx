import React from "react";
import logo from "../assets/Netflix.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container-fluid px-3 px-md-5">
          <div className="row py-4 py-md-5">
            {/* Logo */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center mb-3 mb-md-0">
              <img
                src={logo}
                alt="Logo"
                className="logo1"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </div>

            {/* Copyright */}
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <p className="mb-0 text-center text-md-center fs-6 fs-md-5">
                Todos os direitos reservados © 2025 Thiago Mazzi.
              </p>
            </div>

            {/* Link Instagram */}
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <a
                className="text-decoration-none text-light fw-bold fs-6 fs-md-5 d-flex align-items-center"
                href="https://instagram.com/thiago.mazzi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram me-2"></i>
                @thiago.mazzi
              </a>
            </div>
          </div>

          {/* Seção TMDB Attribution */}
          <div className="row border-top border-secondary pt-3 mt-0 mb-3">
            <div className="col-12 text-center">
              <p className="mb-0 text-secondary fs-6">
                Dados de filmes e séries fornecidos por{" "}
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info text-decoration-none"
                >
                  The Movie Database (TMDB)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
