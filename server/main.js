require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {login, register} = require('./controllers/auth')

const app = express()

const PORT = process.env.SERVER_PORT
app.use(express.json())
app.use(cors())

app.post('/api/register', register)
app.post('/api/login', login)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))