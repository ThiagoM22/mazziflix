import React, { useEffect, useState } from "react";
import Carrossel from "../components/Carrossel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Series = () => {
  const [actionSeries, setActionSeries] = useState([]); // Séries de Ação
  const [comedySeries, setComedySeries] = useState([]); // Séries de Comédia
  const [dramaSeries, setDramaSeries] = useState([]); // Séries de Drama
  const API_KEY = "ed5a7ff96207a459fa84ad73ea0aab5b"; // Substitua pela sua chave da API do TMDB
  const BASE_URL = "https://api.themoviedb.org/3";

  useEffect(() => {
    // Função para buscar séries de Ação
    const fetchActionSeries = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=10759&page=1`
        );
        const data = await response.json();
        setActionSeries(data.results);
      } catch (error) {
        console.error("Erro ao buscar séries de ação:", error);
      }
    };

    // Função para buscar séries de Comédia
    const fetchComedySeries = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=35&page=1`
        );
        const data = await response.json();
        setComedySeries(data.results);
      } catch (error) {
        console.error("Erro ao buscar séries de comédia:", error);
      }
    };

    // Função para buscar séries de Drama
    const fetchDramaSeries = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=18&page=1`
        );
        const data = await response.json();
        setDramaSeries(data.results);
      } catch (error) {
        console.error("Erro ao buscar séries de drama:", error);
      }
    };

    fetchActionSeries();
    fetchComedySeries();
    fetchDramaSeries();
  }, []);

  return (
    <>
      <NavBar home={""} filmes={""} series={"active"} />
      <div>
        <div>
          <Carrossel genero="Ação" movies={actionSeries} />
          <Carrossel genero="Comédia" movies={comedySeries} />
          <Carrossel genero="Drama" movies={dramaSeries} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Series;
