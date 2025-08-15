import React, { useState } from "react";
import Modal from "./Modal";

const CardFilm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runtime, setRuntime] = useState(null); // Estado para armazenar o runtime
  const [genres, setGenres] = useState([]); // Estado para armazenar os gêneros
  const [cast, setCast] = useState([]); // Estado para armazenar o elenco
  const [episodeCount, setEpisodeCount] = useState(null); // Estado para armazenar quantidade de episódios
  const API_KEY = import.meta.env.VITE_API_KEY; // Usando variável de ambiente
  const BASE_URL = "https://api.themoviedb.org/3";

  const toggleModal = async () => {
    if (!isModalOpen) {
      // Detectar se é filme ou série TV baseado nas props
      const isTV = props.name && !props.title; // Se tem 'name' mas não 'title', é série
      const mediaType = isTV ? "tv" : "movie";
      const mediaId = props.id;

      try {
        // Buscar detalhes do filme ou série
        const mediaResponse = await fetch(
          `${BASE_URL}/${mediaType}/${mediaId}?api_key=${API_KEY}&language=pt-BR`
        );
        const mediaData = await mediaResponse.json();

        // Buscar créditos (elenco) do filme ou série
        const creditsResponse = await fetch(
          `${BASE_URL}/${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=pt-BR`
        );
        const creditsData = await creditsResponse.json();

        // Para séries, runtime é diferente (episode_run_time) e buscar quantidade de episódios
        if (isTV) {
          setRuntime(
            mediaData.episode_run_time && mediaData.episode_run_time[0]
              ? `${mediaData.episode_run_time[0]} min/ep`
              : "N/A"
          );
          // Definir quantidade de episódios para séries
          setEpisodeCount(mediaData.number_of_episodes || "N/A");
        } else {
          setRuntime(mediaData.runtime); // Para filmes
          setEpisodeCount(null); // Filmes não têm episódios
        }

        setGenres(
          mediaData.genres ? mediaData.genres.map((genre) => genre.name) : []
        ); // Extrai os nomes dos gêneros
        setCast(
          creditsData.cast
            ? creditsData.cast.slice(0, 5).map((actor) => actor.name)
            : []
        ); // Pega os 5 primeiros atores
      } catch (error) {
        console.error("Erro ao buscar os dados da mídia:", error);
      }
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={toggleModal}>
        <div>
          <img
            className="Card"
            src={props.poster}
            alt={props.title || props.name}
          />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          title={props.title || props.name} // Usa title para filmes, name para séries
          overview={props.overview}
          backgroundImage={props.backgroundImage}
          releaseDate={props.releaseDate || props.first_air_date} // releaseDate para filmes, first_air_date para séries
          genres={genres} // Agora passa os gêneros buscados da API
          cast={cast} // Agora passa o elenco buscado da API
          voteAverage={props.voteAverage} // Nota do filme/série
          runtime={runtime} // Tempo do filme ou episódio da série
          episodeCount={episodeCount} // Quantidade de episódios (apenas para séries)
        />
      )}
    </>
  );
};

export default CardFilm;
