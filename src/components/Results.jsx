export default function Results({ data }) {
  if (!data) return null
  return (
    <div className="mt-6 bg-slate-800/50 border border-blue-500/20 rounded-2xl p-6">
      <h3 className="text-white font-semibold mb-4">Likely faulty parts</h3>
      <ul className="space-y-3">
        {data.suggestions?.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-blue-300 font-mono w-12">{Math.round(s.likelihood*100)}%</span>
            <div>
              <p className="text-white font-medium">{s.part}</p>
              <p className="text-blue-200/80 text-sm">{s.reason}</p>
            </div>
          </li>
        ))}
      </ul>
      {data.id && (
        <p className="text-xs text-blue-300/60 mt-4">Saved to history.</p>
      )}
    </div>
  )
}
