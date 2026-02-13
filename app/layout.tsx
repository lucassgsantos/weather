import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'App de Clima',
  description: 'Consulte o clima de qualquer cidade do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold">🌤️ App de Clima</h1>
            <p className="text-blue-100">Veja o clima de qualquer cidade</p>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white mt-16 py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-400">
              Dados fornecidos por OpenWeatherMap
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
