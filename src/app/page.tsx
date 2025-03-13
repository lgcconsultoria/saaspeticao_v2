import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-700">SaaS Petições</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-primary-600">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Registrar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gere petições jurídicas com IA
          </h2>
          <p className="text-xl mb-8 max-w-2xl">
            Economize tempo e aumente sua produtividade com nosso sistema de geração de petições jurídicas
            utilizando inteligência artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/register" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 text-lg">
              Começar agora
            </Link>
            <Link href="/dashboard" className="btn-secondary bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 text-lg">
              Acessar dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Geração com IA</h3>
              <p className="text-gray-600">
                Utilize inteligência artificial para gerar petições jurídicas de alta qualidade em minutos.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Templates Personalizáveis</h3>
              <p className="text-gray-600">
                Personalize e salve seus próprios templates para uso futuro.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Gestão de Clientes</h3>
              <p className="text-gray-600">
                Gerencie seus clientes e associe petições a eles para melhor organização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 SaaS Petições - LGC Consultoria</p>
            <div className="mt-4 md:mt-0">
              <Link href="/termos" className="text-gray-300 hover:text-white mr-4">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-gray-300 hover:text-white">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}