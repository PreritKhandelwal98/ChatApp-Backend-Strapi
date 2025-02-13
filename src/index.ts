const WebSocket = require("ws");

module.exports = {
  register() {},

  bootstrap({ strapi }) {
    const server = strapi.server.httpServer; // Use Strapi's HTTP server
    const wss = new WebSocket.Server({ server });

    server.on("upgrade", (request, socket, head) => {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    });

    wss.on("connection", (ws) => {
      console.log("🔗 Client connected");

      ws.on("message", (message) => {
        console.log(`📩 Received: ${message}`);

        // Send the user's message immediately
        ws.send(`User: ${message}`);

        // Send the server's response
        ws.send(`Server: ${message}`);
      });

      ws.on("close", () => {
        console.log("❌ Client disconnected");
      });
    });

    strapi.server.wss = wss;
    console.log("🚀 WebSocket Server is running on Render!");
  },
};
