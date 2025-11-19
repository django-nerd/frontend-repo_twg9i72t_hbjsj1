import { useState } from 'react'

export default function IssueForm({ onResult }) {
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [faultCode, setFaultCode] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${baseUrl}/api/diagnose`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, model, fault_code: faultCode, description })
      })
      if (!res.ok) throw new Error('Failed to diagnose')
      const data = await res.json()
      onResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-blue-200 mb-1">Make/Brand</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="e.g., Toyota"
            className="w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Model & Year</label>
          <input value={model} onChange={(e)=>setModel(e.target.value)} required placeholder="e.g., Corolla 2018"
            className="w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-blue-200 mb-1">Fault Code (optional)</label>
          <input value={faultCode} onChange={(e)=>setFaultCode(e.target.value)} placeholder="e.g., P0300"
            className="w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm text-blue-200 mb-1">Problem Description</label>
          <input value={description} onChange={(e)=>setDescription(e.target.value)} required placeholder="e.g., Rough idle, stalls at lights"
            className="w-full rounded-lg bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold py-2 rounded-lg transition-colors">
        {loading ? 'Diagnosing…' : 'Get Suggestions'}
      </button>
    </form>
  )
}
