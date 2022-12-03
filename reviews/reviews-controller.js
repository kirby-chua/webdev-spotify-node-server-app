import * as reviewsDao from './reviews-dao.js'

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await reviewsDao.createReview(review)

        res.json(actualReview)
    }

    const findReviewsBySong = async (req, res) => {
        const sid = req.params.sid
        const reviews = await reviewsDao.findReviewsBySong(sid)

        res.json(reviews)
    }

    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await reviewsDao.findReviewsByAuthor(author)

        res.json(reviews)
    }
    app.post('/reviews', createReview)
    app.get('/songs/:sid/reviews', findReviewsBySong)
    app.get('/users/:author/reviews', findReviewsByAuthor)
}

export default ReviewsController