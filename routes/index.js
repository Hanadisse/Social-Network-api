const router = require("express").Router()

const apiThoughts = require("./api")

// const apiUsers = require("./api/userRoutes")
// const apiThoughts = require("./api/thoughtRoutes")

// router.use('/api', apiUsers)
router.use('/api', apiThoughts)

router.use((req, res) => {
    res.status(404).send('<h1>Wrong Route!</h1>')
})

module.exports = router