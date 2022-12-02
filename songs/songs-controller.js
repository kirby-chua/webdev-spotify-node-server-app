import * as songsDao from './songs-dao.js';

const SongsController = (app) => {
    const createSong = async (req, res) => {
        const song = req.body
        const existingSong = await songsDao.findSongByTrackId(song.trackId)
        // maybe we want to increase number of likes?
        if (existingSong) {
            res.sendStatus(403)
            return
        }
        const actualSong = await songsDao.createSong(song);
        res.send(actualSong);
    }

    const findAllSongs = async (req, res) => {
        const songsInDatabase = await songsDao.findAllSongs();
        res.send(songsInDatabase);
    }

    const updateSong = async (req, res) => {
        const sid = req.params['sid'];
        const songUpdates = req.body
        const status = await songsDao.updateSong(sid, songUpdates);
        res.json(status);
    }

    const deleteSong = async (req, res) => {
        const sid = req.params['sid'];
        const status = await songsDao.deleteSong(sid);
        res.json(status);
    }

    const findSongByTrackId = async (req, res) => {
        const tid = req.params['tid']
        const song = await songsDao.findSongByTrackId(tid)
        if (song) {
            res.json(song)
            return
        }
        res.sendStatus(404)
    }

    app.post('/songs', createSong)
    app.get('/songs', findAllSongs)
    app.put('/songs/:sid', updateSong)
    app.delete('/songs/:sid', deleteSong)
    app.get('/songs/:sid', findSongByTrackId)
}

export default SongsController;