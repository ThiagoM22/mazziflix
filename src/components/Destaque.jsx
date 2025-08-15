const Destaque = (props) => {
  const handleWatchClick = () => {
    // Abre uma nova guia pesquisando o título do filme no Google
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      props.title
    )}`;
    window.open(searchUrl, "_blank");
  };

  // Função para truncar texto em mobile
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

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
          <h1 className="display-4 fw-bold ">{props.title}</h1>
          {/* Texto completo para desktop */}
          <p className="w-75 w-md-50 d-none d-md-block">{props.description}</p>
          {/* Texto truncado para mobile */}
          <p className="w-75 d-block d-md-none">
            {truncateText(props.description, 150)}
          </p>
          <button
            className="btnDestaque Assistir btn btn-success fs-5 border-0 fw-bold mt-3"
            onClick={handleWatchClick}
          >
            Assistir
          </button>
        </div>
      </div>
    </>
  );
};

export default Destaque;
