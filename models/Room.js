export class Room {
    constructor(roomId) {
        this.roomId = roomId;
        this.host = '';
        this.url = 'https://www.youtube.com/watch?v=4dV96eVRrjk';
        this.chat = [];
        this.users = [];
        this.isPlaying = false;
        this.timestamp = 0.0;
        this.bgColor = '#fff';
    }
}

