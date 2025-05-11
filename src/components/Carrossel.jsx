import CardFilm from "./CardFilm";

const Carrossel = (props) => {
  return (
    <>
      <div className="d-flex flex-column mt-5 ms-5 overflow-x-scroll scroller overflow-y-hidden">
        <h2>{props.genero}</h2>
        <div className="d-flex gap-4">
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />
          <CardFilm />


        </div>
      </div>
    </>
  );
};

export default Carrossel;
