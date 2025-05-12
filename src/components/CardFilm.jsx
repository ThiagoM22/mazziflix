import React, { useState } from "react";
import Modal from "./Modal";

const CardFilm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runtime, setRuntime] = useState(null); // Estado para armazenar o runtime
  const API_KEY = "ed5a7ff96207a459fa84ad73ea0aab5b"; // Substitua pela sua chave da API do TMDB
  const BASE_URL = "https://api.themoviedb.org/3";

  const toggleModal = async () => {
    if (!isModalOpen) {
      // Buscar o runtime do filme ao abrir o modal
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${props.id}?api_key=${API_KEY}&language=pt-BR`
        );
        const data = await response.json();
        setRuntime(data.runtime); // Atualiza o estado com o runtime
      } catch (error) {
        console.error("Erro ao buscar o runtime do filme:", error);
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
          genres={props.genres}
          cast={props.cast}
          voteAverage={props.voteAverage} // Nota do filme
          runtime={runtime} // Tempo do filme
        />
      )}
    </>
  );
};

export default CardFilm;
