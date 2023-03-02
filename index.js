import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

import { JoinRoomEvent, JoinRoomServerEvent } from "./actions/RoomActions.js";
import { SendMessageEvent } from "./services/ChatService.js";
import {
  DisconnectRoomEvent,
  GetRoomSettings,
  RegisterRoom,
} from "./services/RoomService.js";
import {
  SetVideoEvent,
  SetVideoPlayEvent,
  SetVideoProgress,
} from "./services/VideoService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + "/src"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + `/src/index.html`);
});

io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("auth_test", (data) => {
    console.table(data);
  });

  socket.on("disconnect", () => {
    DisconnectRoomEvent(socket);
  });

  socket.on("room_join", (data) => {
    JoinRoomEvent(socket, data);
  });
  socket.on("room_getdata", (data) => {
    GetRoomSettings(socket, data);
  });
  socket.on("message_send", (data) => {
    SendMessageEvent(io, socket, data);
  });
  socket.on("video_set", (data) => {
    SetVideoEvent(io, socket, data);
  });
  socket.on("video_play", (data) => {
    SetVideoPlayEvent(io, socket, data);
  });
  socket.on("video_seek", (data) => SetVideoProgress(io, socket, data));
});

// Room Activity Listeners
io.of("/").adapter.on("create-room", (room) => {
  RegisterRoom(room);
});

io.of("/").adapter.on("join-room", (room,id) => {
  JoinRoomServerEvent(io, room, id);
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
