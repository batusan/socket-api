export default class User {
    constructor(id, name, currentRoom) {
        this.id = id;
        this.name = name;
        this.currentRoom = currentRoom;
    }

    changeRoom = (room) => {
        this.currentRoom = room;
    }
}

