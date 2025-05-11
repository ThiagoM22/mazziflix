const Destaque = () => {
  return (
    <>
      <div className="Destaque h-100 d-flex flex-column justify-content-center align-items-start px-3 px-md-5">
        <div className="d-flex flex-column justify-content-center Info  text-md-start">
          <h1 className="display-4 fw-bold">Titulo</h1>
          <p className="w-75 w-md-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            sapiente eos tempora dolor rem, odio architecto quo quia ullam
            deleniti nostrum nesciunt provident facilis sit a, facere itaque
            obcaecati ex!
          </p>
          <button className="Assistir btn btn-success fs-5 border-0 fw-bold mt-3">
            Assistir
          </button>
        </div>
      </div>
    </>
  );
};

export default Destaque;
