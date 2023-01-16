const { User } = require('../models')

const userController = {
    getAllUsers(req, res) {
        User.find({})
        // .populate({
        //     // path: "thoughts",
        //     select: "-__v"
        // })
        .select("-__v")
        .sort({_id: -1})
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    createUser({body}, res) {
        User.create(body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    }
}

module.exports = userController;