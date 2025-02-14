export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ["https://chat-app-frontend-yd9g.vercel.app", "http://localhost:5173"],  // Explicitly define allowed origins
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
