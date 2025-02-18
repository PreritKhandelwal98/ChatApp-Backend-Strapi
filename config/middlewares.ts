export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx)=>{
        const allowedOrigins = [
          "https://chat-app-frontend-r3fh.vercel.app/", 
          "http://localhost:5173"
        ];
        return allowedOrigins.includes(ctx.request.header.origin) ? ctx.request.header.origin : false; 
      },       
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
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
