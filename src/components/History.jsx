import { useEffect, useState } from 'react'

export default function History() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/history`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    fetchHistory()
  }, [])

  if (!items.length) return null

  return (
    <div className="mt-10">
      <h3 className="text-white font-semibold mb-3">Recent diagnoses</h3>
      <div className="space-y-2">
        {items.map((it) => (
          <div key={it._id} className="bg-slate-900/60 border border-slate-700 rounded-lg p-3">
            <p className="text-blue-200 text-sm"><span className="text-white font-medium">{it.name}</span> • {it.model} {it.fault_code ? `• ${it.fault_code}` : ''}</p>
            <p className="text-blue-300/80 text-xs mt-1">{it.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
