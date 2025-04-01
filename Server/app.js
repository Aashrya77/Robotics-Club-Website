require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5500

const startServer = async () => {
    try {
        app.listen(port, () => console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

startServer()