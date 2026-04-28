import React from 'react'

export default function CardChildren({ titulo, descripcion, children }) {
  return (
    <div className='bg-gray-400 border-2 rounded-2xl p-5 space-y-4'>
      <h1 className='text-2xl font-bold'>{titulo}</h1>
      <p className='text-gray-800'>{descripcion}</p>
      <div className='rounded-xl bg-white p-4'>{children}</div>
      <button className='button'>Click me</button>
    </div>
  )
}
