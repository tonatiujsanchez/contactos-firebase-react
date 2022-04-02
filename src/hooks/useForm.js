import { useState } from "react"


const useForm = ( estadoIncial = {} ) =>{


    const [ values, setValues ] = useState(estadoIncial)

    const handleInputChange = ( { target } ) =>{
        const name  = target.name
        const value = target.value
        
        setValues({
            ...values,
            [name]: value
        })
    }


    const resetForm = () =>{
        setValues( estadoIncial )
    }

    return [ values, handleInputChange, resetForm ]

}

export default useForm