const {Thought} = require('../models')

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .select("-__v")
        .sort({_id: -1})
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        // .populate({
        //     path: "thoughts",
        //     select: "-__v"
        // })
        .select("-__v")
        .then ((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: "Mo User found with this id"});
                return;
            }
            res.json(dbUserData);
        })
    },
    createThought({body}, res) {
        Thought.create(body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    }
}

module.exports = thoughtController;