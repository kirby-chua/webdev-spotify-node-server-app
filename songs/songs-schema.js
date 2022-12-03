import mongoose from "mongoose";

const songsSchema = mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    // this trackId comes from the Itunes api. It's possible that we could just use this as _id
    // Right now it's usage is to maintain song uniqueness
    // This might be used for some searches, but not sure?
    trackId: {type: String, unique: true, required: true},
    releaseDate:{type: Date, required: true},
    likes: {type: Number, default: 0},
    liked: {type: Boolean, default: false},
    previewUrl: String,
    artworkUrl: String,
    dislikes: {type: Number, default: 0},
}, {collection: 'songs'})

export default songsSchema;