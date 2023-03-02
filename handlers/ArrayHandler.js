let rooms = [];
let users = [];

export const addUserToArray = (newUser) => {
    console.log("user added")
    if (newUser != null) users.push(newUser);
}

export const addRoomToArray = (newRoom) => {
    console.log("room added")
    if (newRoom != null) rooms.push(newRoom);
}

export const addUserToRoomArray = (User, roomId) => {
    if (User != null) {
        var room = rooms.find(room => room.roomId == roomId);
        room.users.push(User);
    }
}

export const findUserById = (socketId) => {
    let user = users.find(user => user.id == socketId);
    if (user != undefined) return user;
}

export const findRoomById = (roomId) => {
    let room = rooms.find(room => room.roomId == roomId);
    if (room != undefined) return room;
}

