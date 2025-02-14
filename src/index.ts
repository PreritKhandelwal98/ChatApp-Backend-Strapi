const WebSocket = require("ws");

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    const httpServer = strapi.server.httpServer; // Correct way to get Strapi's HTTP server

    if (!httpServer) {
      console.error("❌ HTTP server is not available in Strapi.");
      return;
    }

    if (!strapi.wss) {
      const wss = new WebSocket.Server({ server: httpServer });

      wss.on("connection", (ws) => {
        console.log("🔗 Client connected");

        ws.on("message", (message) => {
          console.log(`📩 Received: ${message}`);

          // Send messages to the client
          ws.send(`User: ${message}`);
          ws.send(`Server: ${message}`);
        });

        ws.on("close", () => console.log("❌ Client disconnected"));
      });

      // Attach WebSocket instance to Strapi
      strapi.wss = wss;
      console.log("🚀 WebSocket Server is running on Render!");
    }
  },
};
