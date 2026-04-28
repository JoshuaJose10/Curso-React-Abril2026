import React from 'react'

export default function ComputadorasComponent(props) {
  return (
    <div>
        <div className='bg-green-300 p-4 rounded-lg'>
            <h2 className='text-2xl flex flex-col'>ComputadorasComponent</h2>
            <p>Id: {props.id}</p>
            <p>Marca: {props.marca}</p>
            <p>Modelo: {props.modelo}</p>
            <p>Precio: {props.precio}</p>

        </div>
    </div>
  )
}
