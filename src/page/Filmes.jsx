import NavBar from "../components/NavBar";
import Carrossel from "../components/Carrossel";
import Footer from "../components/Footer";

const Filmes = () => {
  return (
    <>
      <div>
        <NavBar series={""} filmes={"active"} />
        <div>
            <Carrossel genero="Ação" />
            <Carrossel genero="Aventura" />
            <Carrossel genero="Drama" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Filmes;
