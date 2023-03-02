import { findRoomById } from "../handlers/ArrayHandler.js";

export const SetVideoEvent = (io, socket, data) => {
    if (data.url != null) {
        io.in(data.roomId).emit("video_set", {
            user: data.user,
            url: data.url
        });

        let room = findRoomById(data.roomId);
        room.url = data.url;
    }
}

export const SetVideoPlayEvent = (io, socket, data) => {
    if (data != null) {
        io.in(data.roomId).emit("video_play", {
            user: data.user,
            isPlaying: data.isPlaying
        });
    }
}

export const SetVideoProgress = (io, socket, data) => {
    if (data != null) {
        io.in(data.roomId).emit("video_seek", {
            user: data.user,
            played: data.played
        });
    }
}