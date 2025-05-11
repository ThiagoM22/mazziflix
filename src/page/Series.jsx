import Carrossel from "../components/Carrossel"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"


const Series = () => {
  return (
   <>
   <NavBar home={""} filmes={""} series={"active"} />
   <div>
    <div>
        <Carrossel genero="Ação" />
        <Carrossel genero="Aventura" />
        <Carrossel genero="Drama" />
    </div>
    <Footer />
   </div>
   </>
  )
}

export default Series