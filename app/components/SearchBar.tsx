'use client'

import { useState } from 'react'

interface SearchBarProps {
  onSearch: (city: string) => void
  loading: boolean
}

export function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8" aria-busy={loading}>
      <label htmlFor="city-search" className="sr-only">
        Nome da cidade
      </label>
      <div className="flex gap-2">
        <input
          id="city-search"
          type="text"
          placeholder="Digite o nome da cidade..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
          autoComplete="address-level2"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg disabled:opacity-50 transition-colors"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
    </form>
  )
}
