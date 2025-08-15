import React, { useState } from "react";
import Modal from "./Modal";

const CardFilm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runtime, setRuntime] = useState(null); // Estado para armazenar o runtime
  const [genres, setGenres] = useState([]); // Estado para armazenar os gêneros
  const [cast, setCast] = useState([]); // Estado para armazenar o elenco
  const API_KEY = import.meta.env.VITE_API_KEY; // Usando variável de ambiente
  const BASE_URL = "https://api.themoviedb.org/3";

  const toggleModal = async () => {
    if (!isModalOpen) {
      // Buscar o runtime, gêneros e elenco do filme ao abrir o modal
      try {
        // Buscar detalhes do filme
        const movieResponse = await fetch(
          `${BASE_URL}/movie/${props.id}?api_key=${API_KEY}&language=pt-BR`
        );
        const movieData = await movieResponse.json();

        // Buscar créditos (elenco) do filme
        const creditsResponse = await fetch(
          `${BASE_URL}/movie/${props.id}/credits?api_key=${API_KEY}&language=pt-BR`
        );
        const creditsData = await creditsResponse.json();

        setRuntime(movieData.runtime); // Atualiza o estado com o runtime
        setGenres(
          movieData.genres ? movieData.genres.map((genre) => genre.name) : []
        ); // Extrai os nomes dos gêneros
        setCast(
          creditsData.cast
            ? creditsData.cast.slice(0, 5).map((actor) => actor.name)
            : []
        ); // Pega os 5 primeiros atores
      } catch (error) {
        console.error("Erro ao buscar os dados do filme:", error);
      }
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={toggleModal}>
        <div>
          <img className="Card" src={props.poster} alt={props.title} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          title={props.title}
          overview={props.overview}
          backgroundImage={props.backgroundImage}
          releaseDate={props.releaseDate}
          genres={genres} // Agora passa os gêneros buscados da API
          cast={cast} // Agora passa o elenco buscado da API
          voteAverage={props.voteAverage} // Nota do filme
          runtime={runtime} // Tempo do filme
        />
      )}
    </>
  );
};

export default CardFilm;
