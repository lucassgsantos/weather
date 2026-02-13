export interface WeatherData {
  city: string
  country: string
  temperature: number
  feelsLike: number
  humidity: number
  pressure: number
  windSpeed: number
  description: string
  icon: string
  sunrise: number
  sunset: number
  uvIndex: number
}

export interface ForecastDay {
  date: string
  tempMax: number
  tempMin: number
  humidity: number
  windSpeed: number
  description: string
  icon: string
}
