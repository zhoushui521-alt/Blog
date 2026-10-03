import type { APIRoute } from 'astro'
import { defaultOgPng } from '@/lib/og'

export const prerender = true

export const GET: APIRoute = async () => {
  const png = await defaultOgPng({
    name: 'Daniel',
    tagline: 'AI Applications & Full-Stack Practice'
  })
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
