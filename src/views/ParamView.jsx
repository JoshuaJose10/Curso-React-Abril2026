import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamView() {
  const { id } = useParams()

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Vista de Parámetros</h1>
      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="text-lg">
          <strong>Parámetro recibido:</strong> <span className="text-blue-600 font-semibold">{id}</span>
        </p>
      </div>
    </div>
  )
}
