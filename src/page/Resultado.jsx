import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardFilm from "../components/CardFilm";

const Resultado = () => {
  const location = useLocation(); // Hook para acessar a URL atual
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    // Extrai o parâmetro "query" da URL
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      setPesquisa(query); // Atualiza o estado com o valor da query
    }
  }, [location.search]); // Reexecuta sempre que a URL mudar

  useEffect(() => {
    // Atualiza o título da página quando o valor da pesquisa muda
    document.title = `Resultados para: ${pesquisa}`;
  }, [pesquisa]);

  return (
    <>
      <NavBar home={""} filmes={""} series={""} />
      <div className="container mt-5">
        <h1>Resultados para: {pesquisa}</h1>
        <div className="d-flex gap-4 flex-wrap mt-4">
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resultado;
