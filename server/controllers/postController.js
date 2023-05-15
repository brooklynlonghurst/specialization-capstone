const {Post, User} = require('../util/models')

module.exports = {
    addPost: async (req, res) => {
        try {
            const {title, description, userId} = req.body
            let newPost = await Post.create({title, description, userId})
            res.status(200).send(newPost)
        }
        catch (error) {
            console.log(error)
        }
    }
}