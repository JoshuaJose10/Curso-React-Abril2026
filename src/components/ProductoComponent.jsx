import React from 'react'

export default function ProductoComponent(props) {
  return (
    <div>
      <div className='bg-orange-300 p-4 rounded-lg'>
        <h2 className='text-2xl flex flex-col'>ProductoComponent</h2>
        <p>Nombre: {props.name}</p>
        <p>Precio: {props.price}</p>
        <p>ID: {props.id}</p>
      </div>
    </div>
  )
}
