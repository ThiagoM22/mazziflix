
import "./App.css";
import CardFilm from "./components/CardFilm";
import Destaque from "./components/Destaque";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Carrossel from "./components/Carrossel";

function App() {
  return (
    <>
      <NavBar />
      <Destaque/>
<Carrossel genero="Séries" />
<Carrossel genero="Filmes" />

    </>
  );
}

export default App;
