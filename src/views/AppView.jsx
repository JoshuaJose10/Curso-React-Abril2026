import React from 'react'
import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <>
        <h1 className='text-5xl font-bold text-center'>App View</h1>

        <Link to={'/otra'} className=''>
            Ir a otra pagina
        </Link>
    </>

    
  )
}
