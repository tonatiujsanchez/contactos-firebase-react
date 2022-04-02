import { useState } from "react"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import db from "../firebase/firebaseConfig"

import styled from "styled-components"
import useForm from "../hooks/useForm"





const ContactoListItem = ({ contacto }) => {
    
    const [ editando, setEditado ] = useState(false)
        
    const [ { nombre, correo }, handleInputChange, resetForm ] = useForm({
        nombre: contacto.nombre, 
        correo: contacto.correo
    })

    const handleForm = ( e ) =>{
        e.preventDefault()

        if( [nombre.trim(), correo.trim()].includes('') ){
            console.log('Todos son obligatorios');
            return
        }

        const contactoActualizado = {
            nombre: nombre.trim(),
            correo: correo.trim()
        }

        actualizarContacto( contactoActualizado )
    }


    const actualizarContacto = async( contactoActualizado ) => {
        try {
           await updateDoc( doc( db, 'contactos', contacto.id ), contactoActualizado)
            setEditado( false )

        } catch ( error ) {
            console.log('Hubo un error. No se pudo Actualizar el contacto. ', error);
        }
    }

    const cancelarEditar = () =>{
        setEditado( false )
        resetForm()
    }

    const eliminarContacto = async( idContacto ) =>{
        try {
            await deleteDoc( doc( db, 'contactos', idContacto ) )
        } catch (error) {
            console.log('Hubo un error. No se pudo Eliminar el contacto. ', error);
        }
    }


  return (
    <ContenedorContacto>
        {editando
            ?<form onSubmit={ handleForm }>
                <Input 
                    type="text" 
                    name="nombre"
                    value={ nombre } 
                    onChange={ handleInputChange }
                    placeholder="Nombre" 
                    autoComplete="off" />
                <Input 
                    type="email" 
                    name="correo"
                    value={ correo } 
                    onChange={ handleInputChange }
                    placeholder="Correo" 
                    autoComplete="off" />
                <Boton type="submit">Actualizar</Boton>
                <Boton type="button" onClick={ cancelarEditar }>Cancelar</Boton>
             </form>
            :<>
                <Nombre>{ contacto.nombre }</Nombre>
                <Correo>{ contacto.correo }</Correo>
                <Boton onClick={ ()=> setEditado( true ) } type="button">Editar</Boton>
                <Boton onClick={ ()=> eliminarContacto( contacto.id ) } type="button">Eliminar</Boton>
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