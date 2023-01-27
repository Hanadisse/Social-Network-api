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
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then ((dbThoughtData) => {
            if (!dbThoughtData) {
                res.status(404).json({ message: "Mo Thought found with this id"});
                return;
            }
            res.json(dbThoughtData);
        })
    },
    createThought({body}, res) {
        Thought.create(body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    },
    updateThought({params, body}, res) {
    Thought.findOneAndUpdate({_id: params.id}, body, {
            new: true
        })
        .then ((dbThoughtData) => {
            if (!dbThoughtData) {
                res.status(404).json({ message: "Mo Thought found with this id"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => res.status(500).json(err))
    },
    deleteThought({params}, res) {
        Thought.findOneAndDelete({_id: params.id})
        .then ((dbThoughtData) => {
            if (!dbThoughtData) {
                res.status(404).json({ message: "Mo Thought found with this id"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch((err) => res.status(500).json(err))
    },

        // Reaction portion

        addReaction({ params, body }, res) {
            Thought.findOneAndUpdate(
              { _id: params.thoughtId },
              { $addToSet: {reactions: body } },
              { new: true }
            )
              .then(dbThoughtData => {
                if (!dbThoughtData) {
                  res.status(404).json({ message: 'No Reaction found with this id!' });
                  return;
                }
                res.json(dbThoughtData);
              })
              .catch(err => res.json(err));
          },
        
          deleteReaction({ params }, res) {
            Thought.findOneAndUpdate(
              { _id: params.thoughtId },
              { $pull: {reactions: {reactionId: params.reactionId} } },
              { new: true }
            )
              .then(dbThoughtData => {
                if (!dbThoughtData) {
                  res.status(404).json({ message: 'No User found with this id!' });
                  return;
                }
                res.json(dbThoughtData);
              })
              .catch(err => res.json(err));
          },
}

module.exports = thoughtController;