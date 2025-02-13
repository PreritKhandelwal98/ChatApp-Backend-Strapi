export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RENDER_EXTERNAL_URL', 'https://chatapp-backend-strapi.onrender.com'), // ✅ Ensure correct Render URL
  app: {
    keys: env.array('APP_KEYS'),
  },
});
