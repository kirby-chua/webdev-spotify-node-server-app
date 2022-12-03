import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    song: {type: mongoose.Schema.Types.ObjectId, ref: 'SongModel'},
}, {collection: 'likes'})

export default likesSchema