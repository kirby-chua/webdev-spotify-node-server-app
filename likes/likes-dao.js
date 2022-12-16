import likesModel from "./likes-model.js";

export const userLikesSong = async (uid, sid) =>
    await likesModel.create({user: uid, song: sid})


export const userUnlikesSong = async (uid, sid) =>
    await likesModel.deleteOne({user: uid, song: sid})

export const findSongsLikedByUser = async (uid) =>
    await likesModel
        .find({user: uid}, {user: false})
        .populate('song', 'title trackId')
        .exec()

export const findUsersThatLikedSong = async (sid) =>
    await likesModel.find({song: sid}, {song: false})
        .populate('user', 'username')
        .exec()

export const findAllLikes = async () =>
    await likesModel.find()

export const getTopSongs = async () =>
    await likesModel.aggregate([
        {
            '$group': {
                '_id': '$song',
                'likes': {
                    '$sum': 1
                }
            }
        }, {
            '$lookup': {
                'from': 'songs',
                'localField': '_id',
                'foreignField': '_id',
                'as': 'result'
            }
        }, {
            '$sort': {
                'likes': -1
            }
        }
    ])