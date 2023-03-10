import estilo from './Form.module.css'
import React, { useState } from 'react'
import Card from '../Card/Card' 

const Form = () => {


   const [mascota, setMascota] = useState ({

        nombre:"",
        especie:"",

   })
   const [error, setError] = useState(false)
   const [errorMessage, setErrorMessage] = useState("")
   const [isSent, setIsSent] = useState(false);


   const handleChange = (e, propiedad) => {

    setMascota({...mascota, [propiedad]: e.target.value})

   }

   const validateName = (str) => {
    
    const withoutSpaces = str.trim();

    if (withoutSpaces.length > 2 && str === withoutSpaces) {
      return true;
    } else {
      return false;
    }
    
   };
   

   const handleSubmit = (e) => {
    e.preventDefault();

    
    const nameIsValid = mascota.nombre.length >2 && validateName(mascota.nombre);
    const specieIsValid = mascota.especie.length >5;

    if (!nameIsValid || !specieIsValid) {
        setError(true);
        console.log(error);
  
        if (!nameIsValid && !specieIsValid) {
          alert("Los datos no son válidos");
          console.log(errorMessage);
        } else if (!nameIsValid) {
          setErrorMessage("El nombre debe tener al menos 3 carácteres y no debe contener espacios");
        } else {
          setErrorMessage("La especie debe tener al menos 6 carácteres");
        }
  
        return;
    }

    setIsSent(true)
    console.log("data: ", mascota);
    
   }


  return (
    <div className = {estilo.container} onSubmit = {handleSubmit}>
        <form className={estilo.form}>

            <h2>Ingresa los datos de tu mascota</h2>
            <input 
                
                className={estilo.input}
                type="text" 
                name='Nombre de mascota'
                onChange={(e)=>handleChange(e, "nombre")}
                
                
            />

            {error && errorMessage.includes("El nombre debe tener al menos 3 carácteres y no debe contener espacios") && (
                <span style={{ color: "red", fontSize: "0.7rem" }}>
                    {errorMessage}
                </span>
            )}


            <input 
                className={estilo.input}
                type="text" 
                name='Especie de mascota'
                onChange={(e)=>handleChange(e, "especie")}
            />

            {error && errorMessage.includes("La especie debe tener al menos 6 carácteres") && (
                <span style={{ color: "red", fontSize: "0.7rem" }}>
                    {errorMessage}
                </span>
            )}

            <button className={estilo.boton} type='submit'>Enviar</button>
        </form>
      
            {isSent && (
            <Card nombre={mascota.nombre} especie={mascota.especie} />
            )}
    </div>
  )
}


export default Form
