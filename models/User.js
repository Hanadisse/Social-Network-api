const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    unique: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thoughts",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},{
    toJSON: {
        virtuals: true,
    },
    id: false
});

UserSchema.virtual("friendCount").get(function() {
    return this.friends.length
})

const User = model("User", UserSchema);

module.exports = User;
