import {
  addRoomToArray,
  findRoomById,
  findUserById,
} from "../handlers/ArrayHandler.js";
import { Room } from "../models/Room.js";

export function RegisterRoom(roomId, socketId) {
  if (roomId != null) {
    console.log("Register room : ", roomId);
    let temp_room = new Room(roomId, socketId);
    addRoomToArray(temp_room);
  }
}

export const GetRoomSettings = (socket, data) => {
  let room = findRoomById(data.roomId);
  console.log(data);
  socket.emit("room_getdata", {
    code: 200,
    room: room,
  });
};

export const DisconnectRoomEvent = (socket) => {
  var user = findUserById(socket.id);
  console.log(user);
};
