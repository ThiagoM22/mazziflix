const Destaque = (props) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${props.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="Destaque h-100 d-flex flex-column justify-content-center align-items-start px-3 px-md-5"
      >
        <div className="d-flex flex-column justify-content-center Info text-md-start">
          <h1 className="display-4 fw-bold">{props.title}</h1>
          <p className="w-75 w-md-50">{props.description}</p>
          <button className="Assistir btn btn-success fs-5 border-0 fw-bold mt-3">
            Assistir
          </button>
        </div>
      </div>
    </>
  );
};

export default Destaque;
