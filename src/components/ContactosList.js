import styled from "styled-components"
import { collection, doc, onSnapshot } from "firebase/firestore"
import db from "../firebase/firebaseConfig"
import { useEffect, useState } from "react"
import ContactoListItem from "./ContactoListItem"

const ContactosList = () => {

    const [ contactos, setContactos ] = useState([])

    useEffect(()=>{
        obtenerContactos()
    },[])

    const obtenerContactos = () => {
        const querySnapshot = onSnapshot(
                collection(db, 'contactos'),
                ( snapshot )=>{
                    const arrContactos = snapshot.docs.map( doc => ( { ...doc.data(), id: doc.id } ))
                    setContactos( arrContactos );
                })

    }

    // obtenerContactos()



  return (
    contactos.length > 0 
    ?<ContenedorContactos>
        {contactos.map( contacto => (
            <ContactoListItem key={ contacto.id } contacto={ contacto }></ContactoListItem>
        ))

        }
    </ContenedorContactos>
    : <SinContactos>No hay contactos agregados</SinContactos>
  )
}


const ContenedorContactos = styled.div`
    margin-top: 40px;
`

const SinContactos = styled.p`
    margin-top: 40px;
    text-align: center;
    font-size: 18px;
    opacity: 0.5;
`







export default ContactosList