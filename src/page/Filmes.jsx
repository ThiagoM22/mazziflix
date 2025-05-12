import React, { useEffect, useState } from "react";
import Carrossel from "../components/Carrossel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Filmes = () => {
  const [actionMovies, setActionMovies] = useState([]); // Filmes de Ação
  const [comedyMovies, setComedyMovies] = useState([]); // Filmes de Comédia
  const [dramaMovies, setDramaMovies] = useState([]); // Filmes de Drama
  const API_KEY = "ed5a7ff96207a459fa84ad73ea0aab5b"; // Substitua pela sua chave da API do TMDB
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    // Função para buscar filmes de Ação
    const fetchActionMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28&page=1`
        );
        const data = await response.json();
        setActionMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes de ação:", error);
      }
    };

    // Função para buscar filmes de Comédia
    const fetchComedyMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35&page=1`
        );
        const data = await response.json();
        setComedyMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes de comédia:", error);
      }
    };

    // Função para buscar filmes de Drama
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

    fetchActionMovies();
    fetchComedyMovies();
    fetchDramaMovies();
  }, []);

  return (
    <>
      <NavBar home={""} filmes={"active"} series={""} />
      <div>
        <div>
          <Carrossel genero="Ação" movies={actionMovies} />
          <Carrossel genero="Comédia" movies={comedyMovies} />
          <Carrossel genero="Drama" movies={dramaMovies} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Filmes;
