/** Origin is supplied by Astro config and can be overridden at deployment. */
export const siteOrigin = new URL(
  import.meta.env.PUBLIC_SITE_URL || import.meta.env.SITE || 'http://localhost:4321'
).origin
