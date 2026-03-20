export interface OpenWeatherResponse {
  name: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
    pressure: number
  }
  wind: { speed: number }
  weather: Array<{ description: string; icon: string }>
  sys: { country: string; sunrise: number; sunset: number }
  visibility?: number
}

export function isOpenWeatherResponse(data: unknown): data is OpenWeatherResponse {
  if (typeof data !== 'object' || data === null) return false
  const o = data as Record<string, unknown>
  const main = o.main
  const sys = o.sys
  const weather = o.weather
  const wind = o.wind
  if (typeof main !== 'object' || main === null) return false
  if (typeof sys !== 'object' || sys === null) return false
  if (!Array.isArray(weather) || weather.length === 0) return false
  if (typeof wind !== 'object' || wind === null) return false
  const m = main as Record<string, unknown>
  const s = sys as Record<string, unknown>
  const w0 = weather[0] as Record<string, unknown>
  const wi = wind as Record<string, unknown>
  if (typeof o.name !== 'string') return false
  if (typeof m.temp !== 'number') return false
  if (typeof s.country !== 'string') return false
  if (typeof w0.description !== 'string' || typeof w0.icon !== 'string') return false
  if (typeof wi.speed !== 'number') return false
  return true
}
