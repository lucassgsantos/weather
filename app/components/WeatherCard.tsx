'use client'

import { WeatherData } from '@/types'

interface WeatherCardProps {
  weather: WeatherData | null
  loading: boolean
}

export function WeatherCard({ weather, loading }: WeatherCardProps) {
  if (loading) {
    return <div className="text-center py-8">Carregando...</div>
  }

  if (!weather) {
    return (
      <div className="text-center py-8 text-gray-500">
        Busque uma cidade para ver o clima
      </div>
    )
  }

  const getWeatherIcon = (icon: string) => {
    const iconMap: Record<string, string> = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '🌙',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌧️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️'
    }
    return iconMap[icon] || '🌤️'
  }

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-2">
          {weather.city}, {weather.country}
        </h2>
        <p className="text-blue-100 capitalize">{weather.description}</p>
      </div>

      <div className="text-center mb-8">
        <div className="text-7xl mb-4">{getWeatherIcon(weather.icon)}</div>
        <div className="text-6xl font-bold">{weather.temperature}°C</div>
        <p className="text-blue-100 mt-2">
          Sensação térmica: {weather.feelsLike}°C
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur">
          <p className="text-blue-100 text-sm">Umidade</p>
          <p className="text-2xl font-bold">{weather.humidity}%</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur">
          <p className="text-blue-100 text-sm">Vento</p>
          <p className="text-2xl font-bold">{weather.windSpeed.toFixed(1)}m/s</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur">
          <p className="text-blue-100 text-sm">Pressão</p>
          <p className="text-2xl font-bold">{weather.pressure}hPa</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur">
          <p className="text-blue-100 text-sm">Hora Local</p>
          <p className="text-2xl font-bold">
            {new Date().toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
