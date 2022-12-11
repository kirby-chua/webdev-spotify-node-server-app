import * as followsDao from './follows-dao.js'

const FollowsController = (app) => {
    const followUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await followsDao.followUser(follow)

        res.json(actualFollow)
    }

    const findFollowers = async (req, res) => {
        const followed = req.params.follower
        const followers = await followsDao.findFollowers(followed)

        res.json(followers)
    }

    const findFollowing = async (req, res) => {
        const follower = req.params.follower
        const followed = await followsDao.findFollowing(follower)

        res.json(followed)
    }

    app.post('/follows', followUser)
    app.get('/users/:followed/followers', findFollowers)
    app.get('users/:follower/following', findFollowing)
}

export default FollowsController