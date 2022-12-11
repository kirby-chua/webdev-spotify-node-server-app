import express from 'express';
import mongoose from "mongoose";
import session from "express-session"
import cors from 'cors';
import SongsController from "./songs/songs-controller.js";
import UsersController from "./users/users-controller.js";
import LikesController from "./likes/likes-controller.js";
import FollowsController from "./follows/follows-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/webdev')

SongsController(app);
UsersController(app);
LikesController(app);
FollowsController(app);
ReviewsController(app);
app.listen(4000);