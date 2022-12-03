import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    // do we want to store just the id or the song?
    // itunesId: String,
    reviewed: {type: mongoose.Schema.Types.ObjectId, ref:'SongModel'},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'reviews'})

export default reviewsSchema