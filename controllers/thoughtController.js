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