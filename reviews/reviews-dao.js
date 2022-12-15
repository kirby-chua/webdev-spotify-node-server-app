import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const deleteReview = (rid) =>
    reviewsModel.deleteOne({_id: rid})

export const findReviewsBySong = (sid) =>
    reviewsModel.find({sid})
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({author})
        .exec()