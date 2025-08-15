import React from "react";

const Modal = (props) => {
  const handleBackdropClick = (e) => {
    // Fecha o modal apenas se o clique for no backdrop
    if (e.target === e.currentTarget) {
      props.toggleModal();
    }
  };

  const handleWatchClick = () => {
    // Abre uma nova guia pesquisando o título do filme no Google
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      props.title
    )}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <>
      <div
        className="Centro modalBackdrop"
        onClick={handleBackdropClick} // Adiciona o evento de clique no backdrop
      >
        <div className="animate-modal">
          <div
            className="Modal container-fluid d-flex justify-content-center flex-column align-items-center bg-black movieModal"
            onClick={(e) => e.stopPropagation()} // Impede o clique de fechar o modal
          >
            <div className="d-flex flex-column banner position-relative ">
              {/* Gradiente */}
              <div className="gradient-overlay position-absolute"></div>
              <img
                className="Image z-1 border-start-3 border-end-3"
                src={props.backgroundImage}
                alt={props.title}
              />
              <div className="InfoModal">
                <div className="text position-absolute z-2">
                  <h1 className="display-6 fw-bold w-100">{props.title}</h1>
                  <button
                    className="Assistir btn btn-success fs-5 border-0 fw-bold mt-1"
                    onClick={handleWatchClick} // Adiciona o evento de clique
                  >
                    Assistir
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around mt-4 mb-4">
              <div className="d-flex flex-column ms-4 ">
                <div className="Data d-flex gap-3 justify-content-start fw-bold">
                  <p>{props.releaseDate}</p>
                  <p>{Math.round(props.voteAverage * 10)}% Match</p>{" "}
                  {/* Nota do filme */}
                  <p>{props.runtime} min</p> {/* Tempo do filme */}
                </div>
                <div>
                  <p className="col-10">
                    {props.overview === ""
                      ? "Sem descrição disponível."
                      : props.overview}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column p-0 me-4 ps-5 col-4">
                <div>
                  <p className="mb-1">
                    <strong>Gêneros:</strong> {props.genres?.join(";  ")}
                  </p>
                </div>
                <div>
                  <strong>Elenco:</strong> {props.cast?.join(";  ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
