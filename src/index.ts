const WebSocket = require('ws');

module.exports = {
  register() {}, // No need to modify this now

  bootstrap({ strapi }) {
    const wss = new WebSocket.Server({ port: 8080 });

    wss.on('connection', (ws) => {
      console.log('🔗 Client connected');

      ws.on('message', (message) => {
        console.log(`📩 Received: ${message}`);
        ws.send(`Echo: ${message}`); // Echo message back
      });

      ws.on('close', () => {
        console.log('❌ Client disconnected');
      });
    });

    strapi.server.wss = wss;
    console.log('🚀 WebSocket Server is running on ws://localhost:8080');
  },
};
