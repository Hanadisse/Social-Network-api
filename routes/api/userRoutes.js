const router = require('express').Router()


const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')

// /api/users/ 
router.route("/").get(getAllUsers).post(createUser)

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser)

router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend)

module.exports = router