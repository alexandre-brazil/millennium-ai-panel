export default function StatsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Página de Estatísticas</h1>
      </main>
      <footer className="mt-auto py-4 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Painel AI Mobile
      </footer>
    </div>
  );
}