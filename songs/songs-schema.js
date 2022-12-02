import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    trackId: {type: String, unique: true, required: true},
    releaseDate:{type: Date, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    previewUrl: String,
    artworkUrl: String,
    dislikes: {type: Number, default: 0},
}, {collection: 'songs'})

export default songsSchema;