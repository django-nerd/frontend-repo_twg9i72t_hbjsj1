import { useState } from 'react'
import Header from './components/Header'
import IssueForm from './components/IssueForm'
import Results from './components/Results'
import History from './components/History'

function App() {
  const [result, setResult] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="relative min-h-screen flex items-start justify-center p-6">
        <div className="max-w-2xl w-full mt-10">
          <Header />
          <IssueForm onResult={setResult} />
          <Results data={result} />
          <History />

          <div className="text-center mt-10">
            <p className="text-sm text-blue-300/60">This is a heuristic estimate. Always verify with a professional.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
