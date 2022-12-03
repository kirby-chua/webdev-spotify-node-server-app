import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsBySong = (sid) =>
    reviewsModel.find({sid})
        .populate('reviewed')
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({author})
        .populate('reviewed')
        .exec()