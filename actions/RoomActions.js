import {
  addUserToRoomArray,
  findRoomById,
  findUserById,
} from "../handlers/ArrayHandler.js";
import { RegisterUser } from "../services/AuthService.js";

export const JoinRoomEvent = (socket, data) => {
  if (data.roomId != null) {
    console.log("Register : ", data);
    let returnUser = RegisterUser(data);
    socket.join(data.roomId);
    socket.emit("room_join", {
      code: 200,
      message: "You're redirecting to room",
      user: returnUser,
    });
  }
};

export const JoinRoomServerEvent = (io, room, id) => {
  var user = findUserById(id);
  if (user != null) {
    user.changeRoom(room);
    addUserToRoomArray(user, room);

    io.in(room).emit("user_join", {
      user: user.name,
    });
  }
};
