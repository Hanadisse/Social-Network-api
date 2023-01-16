const router = require("express").Router()

const apiUsers = require("./api/userRoutes")

router.use('/api', apiUsers)

router.use((req, res) => {
    res.status(404).send('<h1>Wrong Route!</h1>')
})

module.exports = router