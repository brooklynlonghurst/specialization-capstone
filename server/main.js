require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {login, register} = require('./controllers/auth')
const {addPost, getPosts, deletePost} = require('./controllers/postController')
const db = require('./util/database')
const {User, Post} = require('./util/models')

const app = express()

const PORT = process.env.SERVER_PORT
app.use(express.json())
app.use(cors())

User.hasMany(Post)
Post.belongsTo(User)

app.post('/api/register', register)
app.post('/api/login', login)
app.post('/api/addPost', addPost)
app.get('/api/getPosts/:id', getPosts)
app.delete('/posts/:id', deletePost)

// db.sync({force: true})
db.sync()
.then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
})
.catch(err => console.log(err))