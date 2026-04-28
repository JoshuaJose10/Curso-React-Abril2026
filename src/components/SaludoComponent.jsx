import React from 'react'

export default function SaludoComponent(props){
  return (
    <div>
      Hola, {props.nombre} {props.apellido}!
    </div>
  )
}
