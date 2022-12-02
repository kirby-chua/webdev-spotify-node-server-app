import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import SongsController from "./songs/songs-controller.js";
import UsersController from "./users/users-controller.js";
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/webdev')

SongsController(app);
UsersController(app);
app.listen(4000);