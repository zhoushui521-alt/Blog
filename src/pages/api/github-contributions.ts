import type { APIRoute } from 'astro'

export const ALL: APIRoute = () => new Response('Not found', { status: 404 })
