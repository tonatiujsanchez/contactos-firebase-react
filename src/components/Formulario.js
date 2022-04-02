import styled from "styled-components"
import useForm from "../hooks/useForm"

import db from '../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore"

const Formulario = () => {

    const [ { nombre, correo }, handleInputChange, resetForm ] = useForm({
        nombre: '',
        correo: ''
    })


    const handleSubmit = ( e ) => {
        e.preventDefault()

        if( [ nombre.trim(), correo.trim() ].includes('') ){
            return
        }

        const nuevoContacto = {
            nombre: nombre.trim(),
            correo: correo.trim()
        }

        agregarContacto( nuevoContacto )
    }

    const agregarContacto = async( nuevoContacto ) => {
        try {
            const docRef = await addDoc(collection(db, "contactos"), nuevoContacto);
            console.log("Document written with ID: ", docRef.id);
            resetForm()
          } catch (e) {
            console.error("Error al intertar agregar un nuevo contacto: ", e);
          }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <Input type="text" name="nombre"  value={nombre} onChange={ handleInputChange } placeholder="Nombre" autoComplete="off" />
            <Input type="email" name="correo"  value={correo} onChange={ handleInputChange } placeholder="Correo" autoComplete="off" />
            <Boton type="submit">Agregar</Boton>
        </form>
    )
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    &:focus {
        border: 2px solid #3D76E9;
    }
`

const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
    &:hover {
        background: #3D76E9;
    }
`


export default Formulario