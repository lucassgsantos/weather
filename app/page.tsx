'use client'

import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import { WeatherData } from '@/types'

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (city: string) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/weather?city=${city}`)
      const data = await response.json()

      if (response.ok) {
        setWeather(data)
      } else {
        setError(data.error || 'Cidade não encontrada')
        setWeather(null)
      }
    } catch (err) {
      setError('Erro ao buscar clima')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <WeatherCard weather={weather} loading={loading} />
    </div>
  )
}
