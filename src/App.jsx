import "./App.css";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Destaque from "./components/Destaque";
import Carrossel from "./components/Carrossel";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([]); // Filmes populares
  const [romanceMovies, setRomanceMovies] = useState([]); // Filmes de romance
  const [dramaMovies, setDramaMovies] = useState([]); // Filmes de drama
  const API_KEY = "ed5a7ff96207a459fa84ad73ea0aab5b"; // Substitua pela sua chave da API do TMDB
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    // Função para buscar filmes populares
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      }
    };

    // Função para buscar filmes de romance
    const fetchRomanceMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749&page=1`
        );
        const data = await response.json();
        setRomanceMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes de romance:", error);
      }
    };

    // Função para buscar filmes de drama
    const fetchDramaMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=18&page=1`
        );
        const data = await response.json();
        setDramaMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes de drama:", error);
      }
    };

    fetchMovies();
    fetchRomanceMovies();
    fetchDramaMovies();
  }, []);

  const mostPopularMovie = movies.length > 0 ? movies[0] : null;

  return (
    <>
      <NavBar home={"active"} filmes={""} series={""} />
      {mostPopularMovie && (
        <Destaque
          title={mostPopularMovie.title}
          description={mostPopularMovie.overview}
          backgroundImage={`https://image.tmdb.org/t/p/original${mostPopularMovie.backdrop_path}`}
        />
      )}
      <Carrossel genero="Destaques" movies={movies} />
      <Carrossel genero="Romance" movies={romanceMovies} />
      <Carrossel genero="Drama" movies={dramaMovies} />
      <Footer />
    </>
  );
}

export default App;
