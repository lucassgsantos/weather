import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.OPENWEATHER_API_KEY || ''

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')

    if (!city) {
      return NextResponse.json({ error: 'Cidade e obrigatoria' }, { status: 400 })
    }

    if (!API_KEY) {
      return NextResponse.json({ error: 'Chave da API nao configurada' }, { status: 500 })
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`
    const response = await fetch(url)

    if (!response.ok) {
      const status = response.status
      if (status === 404) {
        return NextResponse.json({ error: 'Cidade nao encontrada' }, { status: 404 })
      }
      return NextResponse.json({ error: 'Erro ao buscar dados do clima' }, { status })
    }

    const data = await response.json()

    return NextResponse.json({
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    })
  } catch {
    return NextResponse.json(
      { error: 'Erro ao conectar com o servico de clima' },
      { status: 500 }
    )
  }
}
