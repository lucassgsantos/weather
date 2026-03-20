'use client'

import { useRef, useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { WeatherData } from '@/types'

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const abortRef = useRef<AbortController | null>(null)

  const handleSearch = async (city: string) => {
    abortRef.current?.abort()
    const ac = new AbortController()
    abortRef.current = ac

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`, {
        signal: ac.signal,
      })
      const data = await response.json()

      if (response.ok) {
        setWeather(data)
      } else {
        setError(data.error || 'Cidade não encontrada')
        setWeather(null)
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return
      }
      setError('Erro ao buscar clima')
      setWeather(null)
    } finally {
      if (abortRef.current === ac) {
        setLoading(false)
      }
    }
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
          role="alert"
        >
          {error}
        </div>
      )}

      <WeatherCard weather={weather} loading={loading} />
    </div>
  )
}
