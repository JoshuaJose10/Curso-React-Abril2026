import React from 'react'

export default function UsuarioComponent({nombre, edad}) {
  return (
    <div className='bg-yellow-100 border-2 rounded-lg p-5 space-y-3'>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  )
}
