import "./App.css";
import CardFilm from "./components/CardFilm";
import Destaque from "./components/Destaque";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Carrossel from "./components/Carrossel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar home={"active"} filmes={""} series={""} />
      <Destaque />
      <Carrossel genero="Populares" />
      <Carrossel genero="Ação" />
      <Carrossel genero="Aventura" />
      <Footer />
    </>
  );
}

export default App;
