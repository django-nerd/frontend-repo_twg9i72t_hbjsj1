export default function Header() {
  return (
    <header className="text-center mb-10">
      <div className="inline-flex items-center justify-center mb-4">
        <img src="/flame-icon.svg" alt="Logo" className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-bold text-white tracking-tight">AutoDiag</h1>
      <p className="text-blue-200 mt-2">Describe your car issue and get likely faulty parts</p>
    </header>
  )
}
