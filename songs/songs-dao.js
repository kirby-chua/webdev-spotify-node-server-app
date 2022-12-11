import songsModel from "./songs-model.js";

export const findAllSongs = async () =>
    await songsModel.find()

export const createSong = async (song) =>
    await songsModel.create(song)

export const deleteSong = async (sid) =>
    await songsModel.deleteOne({_id: sid})

export const updateSong = async (sid, song) =>
    await songsModel.updateOne({_id: sid}, {$set: song});

export const findSong = async (sid) =>
    await songsModel.findById(sid)

export const findSongByTrackId = async (tid) =>
    await songsModel.findOne({trackId: tid})