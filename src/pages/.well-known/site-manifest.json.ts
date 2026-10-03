import type { APIRoute } from 'astro'
import { siteOrigin } from '@/lib/site-origin'

import { buildSiteFs } from '@/components/terminal/fs/server'

export const GET: APIRoute = async () =>
  new Response(
    JSON.stringify({
      version: '1',
      name: 'Daniel',
      site: siteOrigin,
      description: 'Daniel’s published notes and articles.',
      tree: await buildSiteFs(),
      links: { github: 'https://github.com/zhoushui521-alt', rss: siteOrigin + '/rss.xml' }
    }),
    { headers: { 'content-type': 'application/json; charset=utf-8' } }
  )
