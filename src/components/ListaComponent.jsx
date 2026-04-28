import React from 'react'

export default function ListaComponent({onSeleccionar}) {
  return (
    <ul className='flex flex-col justify-self-center h-20'>
        <li>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => onSeleccionar('Elemento 1 seleccionado')}>
                Selecciona elemento 1
            </button>
        </li>
        <br />
        <li>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => onSeleccionar('Elemento 2 seleccionado')}>
                Selecciona elemento 2
            </button>
        </li>
    </ul>
  )
}
