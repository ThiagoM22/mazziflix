import React from "react";

const Modal = () => {
  return (
    <>
      <div className="Centro">
        <div className="Modal container-fluid d-flex justify-content-center flex-column align-items-center bg-black">
          <div className="d-flex flex-column banner position-relative">
            {/* Gradiente */}
            <div className="gradient-overlay position-absolute"></div>
            <img
              className="Image z-1 border-start-3"
              src="https://placehold.co/900x500"
              alt="Banner"
            />
            <div className="InfoModal">
              <img
                className="logo position-absolute z-3"
                src="https://placehold.co/50x50"
                alt="Logo"
              />
              <div className="text position-absolute z-2">
                <h1 className="display-6 fw-bold">Titulo</h1>
                <button className="Assistir btn btn-success fs-5 border-0 fw-bold mt-3">
                  Assistir
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around mt-4 mb-5">
            <div className="d-flex flex-column ms-5 ">
              <div className="Data d-flex gap-3 justify-content-start fw-bold">
                <p>95% Match</p>
                <p>2023</p>
                <p>14 min</p>
              </div>
              <div>
                <p className="w-75 w-md-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  sapiente eos tempora dolor rem, odio architecto quo quia ullam
                  deleniti nostrum nesciunt provident facilis sit a, facere
                  itaque obcaecati ex!
                </p>
              </div>
            </div>
            <div className="d-flex flex-column me-5">
              <div>
                <p>Genêros: Drama, Romance, Ação</p>
              </div>
              <div>
                Elenco: Leonardo DiCaprio, Kate Winslet, Joseph Gordon-Levitt
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
