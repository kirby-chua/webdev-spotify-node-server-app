import followsModel from "./follows-model.js";

export const followUser = (follow) =>
    followsModel.create(follow)

export const unFollowUser = (follower, followed) =>
    followsModel.deleteOne({follower: follower, followed: followed})

export const findFollowers = (followed) =>
    followsModel.find({followed})
        .populate('follower')
        .exec()

export const findFollowing = (follower) =>
    followsModel.find({follower})
        .populate('followed')
        .exec()