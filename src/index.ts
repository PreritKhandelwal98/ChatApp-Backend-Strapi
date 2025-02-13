const WebSocket = require('ws');

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    const wss = new WebSocket.Server({ port: 8080 });

    wss.on('connection', (ws) => {
      console.log('🔗 Client connected');

      ws.on('message', (message) => {
        console.log(`📩 Received: ${message}`);

        // Send the user's message immediately
        ws.send(`User: ${message}`);

        // Send the server's response immediately (NO DELAY)
        ws.send(`Server: ${message}`);
      });

      ws.on('close', () => {
        console.log('❌ Client disconnected');
      });
    });

    strapi.server.wss = wss;
    console.log('🚀 WebSocket Server is running on ws://localhost:8080');
  },
};
