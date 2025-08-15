import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardFilm from "../components/CardFilm";

const Resultado = () => {
  const location = useLocation(); // Hook para acessar a URL atual
  const [searchResults, setSearchResults] = useState([]); // Estado para armazenar os resultados da pesquisa
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    // Extrai o parâmetro "query" da URL
    const params = new URLSearchParams(location.search);
    const query = params.get("query");

    if (query) {
      // Função para buscar filmes com base no termo de pesquisa
      const fetchSearchResults = async () => {
        try {
          const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1`
          );
          const data = await response.json();
          setSearchResults(data.results); // Atualiza o estado com os resultados da pesquisa
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      };

      fetchSearchResults();
    }
  }, [location.search]); // Reexecuta sempre que a URL mudar

  return (
    <>
      <NavBar home={""} filmes={""} series={""} />
      <div className="container mt-5">
        <h1>Resultados da Pesquisa</h1>
        <div className="d-flex gap-4 flex-wrap mt-4">
          {searchResults.length > 0 ? (
            searchResults.map((movie) => (
              <CardFilm
                key={movie.id}
                title={movie.title}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                overview={movie.overview}
                backgroundImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                releaseDate={movie.release_date}
                genres={movie.genre_ids}
                cast={movie.cast}
              />
            ))
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resultado;
