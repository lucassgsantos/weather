import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clima',
  description: 'Consulte o clima de qualquer cidade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-5">
            <h1 className="text-2xl font-bold text-gray-800">Clima</h1>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8 flex-1 w-full">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-6">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-400">
              Dados fornecidos por OpenWeatherMap
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
