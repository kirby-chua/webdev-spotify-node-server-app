import * as followsDao from './follows-dao.js'

const FollowsController = (app) => {
    const followUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await followsDao.followUser(follow)

        res.json(actualFollow)
    }

    const unfollowUser = async (req, res) => {
        const followed = req.params.followed
        const follower = req.session['currentUser']
        const status = await followsDao.unFollowUser(follower._id, followed)

        res.json(status)
    }

    const findFollowers = async (req, res) => {
        const followed = req.params.followed
        const followers = await followsDao.findFollowers(followed)

        res.json(followers)
    }

    const findFollowing = async (req, res) => {
        const follower = req.params.follower
        const followed = await followsDao.findFollowing(follower)

        res.json(followed)
    }

    app.post('/follows', followUser)
    app.delete('/follows/:followed', unfollowUser)
    app.get('/users/:followed/followers', findFollowers)
    app.get('/users/:follower/following', findFollowing)
}

export default FollowsController