import mongoose from "mongoose";
import songsSchema from "./songs-schema.js";

const songsModel = mongoose.model('SongModel', songsSchema)

export default songsModel