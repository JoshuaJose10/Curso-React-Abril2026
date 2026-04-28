import React from 'react'

export default function PropsExample(props) {
  return (
    <div className="rounded-3xl border border-sky-300 bg-sky-50 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-sky-900">{props.titilo}</h2>
      <p className="mt-3 text-slate-700">{props.descripcion}</p>
      <p className="mt-4 text-sm text-slate-500">Estado: <strong>{props.estado}</strong></p>
    </div>
  )
}
