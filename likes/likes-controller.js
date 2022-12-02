import * as likesDao from './likes-dao.js'

const LikesController = (app) => {
    const userLikesSong = async (req, res) => {
        const uid = req.params.uid
        const sid = req.params.sid
        const newLike = await likesDao.userLikesSong(uid, sid)

        res.json(newLike)
    }

    const userUnlikesSong = async (req, res) => {
        const uid = req.params.uid
        const sid = req.params.sid
        const status = await likesDao.userUnlikesSong(uid, sid)

        res.json(status)
    }

    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()

        res.json(likes)
    }

    const findSongsLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const songs = await likesDao.findSongsLikedByUser(uid)

        res.json(songs)
    }

    const findUsersWhoLikedSong = async (req, res) => {
        const sid = req.params.sid
        const users = await likesDao.findUsersThatLikedSong(sid)

        res.json(users)
    }

    app.post('/users/:uid/likes/:sid', userLikesSong)
    app.delete('/users/:uid/likes/:sid', userUnlikesSong)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findSongsLikedByUser)
    app.get('/songs/:sid/likes', findUsersWhoLikedSong)
}

export default LikesController