import mongoose from "mongoose";
import likesSchema from "./likes-schema.js";

const likesModel = mongoose.model('likeModel', likesSchema)

export default likesModel