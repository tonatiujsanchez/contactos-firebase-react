import { useState } from "react"
import styled from "styled-components"



const ContactoListItem = ({ contacto }) => {

    const [ editando, setEditado ] = useState(false)

    const { id, nombre, correo } = contacto


  return (
    <ContenedorContacto>
        {editando
            ?<form>
                <Input type="text" name="nombre" placeholder="Nombre" autoComplete="off" />
                <Input type="email" name="correo" placeholder="Correo" autoComplete="off" />
                <Boton type="submit">Actualizar</Boton>
             </form>
            :<>
                <Nombre>{ nombre }</Nombre>
                <Correo>{ correo }</Correo>
                <Boton onClick={()=>setEditado( !editando )} type="button">Editar</Boton>
                <Boton type="button">Eliminar</Boton>
             </>

        }
    </ContenedorContacto>
  )
}

const ContenedorContacto = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);

    &:last-of-type{
        border-bottom: none;
    }
`;
 
const Nombre = styled.p`
    font-weight: bold;

`;
 
const Correo = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;
 
const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;
 
const Input = styled.input`
    padding: 10px;
    border: none;
    border-bottom: 2px solid transparent;
    background-color: #EEE;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border-bottom: 2px solid #3D76E9;
    }
`;

export default ContactoListItem