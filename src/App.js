import styled from "styled-components"
import ContactosList from "./components/ContactosList"
import Formulario from "./components/Formulario"



function App() {
  return (
    <Contenedor>
      <Titulo>Lista de Contactos</Titulo>
      <Formulario />
      <ContactosList />
    </Contenedor>
  )
}


const Contenedor = styled.div`
    margin: 40px;
    width: 90%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    text-align: center;
`
 
const Titulo = styled.h2`
    margin-bottom: 10px;
`


export default App
