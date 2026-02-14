'use client'

import { WeatherData } from '@/types'

interface WeatherCardProps {
  weather: WeatherData | null
  loading: boolean
}

export function WeatherCard({ weather, loading }: WeatherCardProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="h-20 bg-gray-200 rounded w-1/4 mx-auto mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    )
  }

  if (!weather) {
    return (
      <div className="text-center py-12 text-gray-400">
        Busque uma cidade para ver o clima
      </div>
    )
  }

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
        <h2 className="text-2xl font-bold">
          {weather.city}, {weather.country}
        </h2>
        <p className="text-blue-100 capitalize mt-1">{weather.description}</p>
        <div className="flex items-center justify-between mt-6">
          <div className="text-6xl font-light">{weather.temperature}°</div>
          <div className="text-right text-blue-100 text-sm">
            <p>Max: {weather.tempMax}°</p>
            <p>Min: {weather.tempMin}°</p>
            <p>Sensacao: {weather.feelsLike}°</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
        <div className="bg-white p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Umidade</p>
          <p className="text-xl font-semibold text-gray-800 mt-1">{weather.humidity}%</p>
        </div>
        <div className="bg-white p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Vento</p>
          <p className="text-xl font-semibold text-gray-800 mt-1">{weather.windSpeed.toFixed(1)} m/s</p>
        </div>
        <div className="bg-white p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Pressao</p>
          <p className="text-xl font-semibold text-gray-800 mt-1">{weather.pressure} hPa</p>
        </div>
        <div className="bg-white p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Nascer do sol</p>
          <p className="text-xl font-semibold text-gray-800 mt-1">{formatTime(weather.sunrise)}</p>
        </div>
        <div className="bg-white p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Por do sol</p>
          <p className="text-xl font-semibold text-gray-800 mt-1">{formatTime(weather.sunset)}</p>
        </div>
        <div className="bg-white p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Sensacao termica</p>
          <p className="text-xl font-semibold text-gray-800 mt-1">{weather.feelsLike}°C</p>
        </div>
      </div>
    </div>
  )
}
