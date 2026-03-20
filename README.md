# Clima

Aplicação Next.js para consultar o clima por cidade. Os dados vêm da [OpenWeatherMap](https://openweathermap.org/api): temperatura (atual, mín/máx e sensação), descrição com ícone, umidade, vento, pressão, visibilidade e horários de nascer e pôr do sol.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Configuração

```bash
npm install
```

Crie `.env.local` na raiz (há um modelo em `.env.example`). Exemplo de conteúdo:

```
OPENWEATHER_API_KEY=sua_chave
```

Chaves gratuitas em https://openweathermap.org/api

## Desenvolvimento

```bash
npm run dev
```

Abra http://localhost:3000

## Scripts

| Comando   | Descrição        |
| --------- | ---------------- |
| `npm run dev`   | Servidor local   |
| `npm run build` | Build produção   |
| `npm run start` | Servir build     |
| `npm run lint`  | ESLint           |

## Deploy

Há uma instância em produção na Vercel: [weather-seven-jade-72.vercel.app](https://weather-seven-jade-72.vercel.app)

Configure `OPENWEATHER_API_KEY` nas variáveis de ambiente do projeto na Vercel.
