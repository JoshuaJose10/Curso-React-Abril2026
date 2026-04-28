import React from 'react'

export default function ChildrenExample({ titulo, children }) {
  return (
    <div className="rounded-3xl border border-emerald-300 bg-emerald-50 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-emerald-900">{titulo}</h2>
      <div className="mt-4 space-y-3 text-slate-700">{children}</div>
    </div>
  )
}
