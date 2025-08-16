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
        className="w-100 h-100 d-flex justify-content-center align-items-center modalBackdrop overflow-y-auto"
        onClick={handleBackdropClick} // Adiciona o evento de clique no backdrop
      >
        <div className="animate-modal col-12 col-md-6">
          <div
            className="col-12  container-fluid d-flex justify-content-center flex-column align-items-center bg-black movieModal"
            onClick={(e) => e.stopPropagation()} // Impede o clique de fechar o modal
          >
            {/* Botão de fechar */}
            <button
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
              onClick={props.toggleModal}
              style={{ zIndex: 10 }}
              aria-label="Fechar modal"
            ></button>

            <div className="d-flex flex-column banner position-relative">
              {/* Gradiente */}
              <div className="gradient-overlay position-absolute w-100 h-100"></div>
              <img
                className="Image rounded-top-3 col-12  z-1 border-start-3 border-end-3"
                src={props.backgroundImage}
                alt={props.title}
              />
              <div className="InfoModal">
                <div className="text position-absolute z-2 p-2 p-md-3">
                  <h1 className="display-6 display-md-5 fw-bold w-100 text-white mb-2">
                    {props.title}
                  </h1>
                  <button
                    className="btnDestaque Assistir col-md-5 d-none d-sm-block btn btn-success fs-6 fs-md-5 border-0 fw-bold mt-2 px-3 py-2"
                    onClick={handleWatchClick}
                  >
                    ▶ Assistir
                  </button>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-3 mt-md-4 mb-3 mb-md-4">
              <div className="row g-3">
                {/* Coluna principal - Informações do filme/série */}
                <div className="col-12 col-lg-8 p-0 p-md-2">
                  <div className="ms-2 ms-md-4">
                    <div className="Data d-flex flex-wrap gap-2 gap-md-3 justify-content-start fw-bold mb-1 mb-md-3">
                      <span className="badge bg-secondary fs-6">
                        {props.releaseDate}
                      </span>
                      <span className="badge bg-success fs-6">
                        {Math.round(props.voteAverage * 10)}% Match
                      </span>
                      <span className="badge bg-info fs-6">
                        {props.runtime !== "N/A"
                          ? props.runtime + " min"
                          : props.episodeCount + " episódios"}
                      </span>
                    </div>
                    <div>
                      <p className="text-light lh-base fs-6 pe-0 pe-md-2 mb-0">
                        {props.overview === ""
                          ? "Sem descrição disponível."
                          : props.overview}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coluna secundária - Gêneros e Elenco */}
                <div className="col-12 col-lg-4">
                  <div className="me-2 me-md-4 ps-0 ps-lg-5">
                    <div className="mb-1 mb-md-3">
                      <p className="mb-1 text-light">
                        <strong className="text-white">Gêneros:</strong>
                      </p>
                      <p className="text-secondary fs-6 mb-0">
                        {props.genres?.join(", ") || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-light">
                        <strong className="text-white">Elenco:</strong>
                      </p>
                      <p className="text-secondary fs-6 mb-0">
                        {props.cast?.join(", ") || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12  d-md-none mb-2 mb-md-0">
                  <button onClick={handleWatchClick} className="btnDestaque Assistir w-100 btn btn-success fs-6 fs-md-5 border-0 fw-bold mt-2 px-3 py-2">
                    ▶ Assistir
                  </button>
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
