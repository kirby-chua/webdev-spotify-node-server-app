import likesModel from "./likes-model.js";

export const userLikesSong = async (uid, sid) =>
    await likesModel.create({user: uid, song: sid})


export const userUnlikesSong = async (uid, sid) =>
    await likesModel.deleteOne({user: uid, song: sid})

export const findSongsLikedByUser = async (uid) =>
    await likesModel
        .find({user: uid}, {user: false})
        .populate('song', 'title')
        .exec()

export const findUsersThatLikedSong = async (sid) =>
    await likesModel.find({song: sid}, {song: false})
        .populate('user', 'username')
        .exec()

export const findAllLikes = async () =>
    await likesModel.find()