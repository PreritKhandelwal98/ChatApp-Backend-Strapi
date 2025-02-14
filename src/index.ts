const WebSocket = require("ws");

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    const server = strapi.server; // Use Strapi's built-in HTTP server

    if (!server.wss) {
      const wss = new WebSocket.Server({ noServer: true }); // Prevent conflicts

      server.on("upgrade", (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit("connection", ws, request);
        });
      });

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

      // Attach WebSocket instance to Strapi server
      strapi.server.wss = wss;
      console.log("🚀 WebSocket Server is running on Render!");
    }
  },
};
