import User from "../models/User.js";
import { addUserToArray } from "../handlers/ArrayHandler.js";

export function RegisterUser(data) {
  if (data != null) {
    console.log("Register : ", data);
    var user = new User(data.id, data.username, data.roomId);
    addUserToArray(user);
    return user;
  }
}
