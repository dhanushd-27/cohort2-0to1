import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    socket.send("Hi there");
  });

  socket.send("Connection successful");
});

console.log("WebSocket server is running on ws://localhost:8080");
