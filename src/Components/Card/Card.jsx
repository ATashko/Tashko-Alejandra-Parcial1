import React from 'react'
import estilo from './Card.module.css'

const Card = ({nombre, especie}) => {
  return (
    <div className = {estilo.container}>
      <h3>Hola! {nombre} </h3>
      <h3>eres un {especie}</h3>
      
    </div>
  )
}

export default Card
