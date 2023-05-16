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
    }, 
    getPosts: async (req, res) => {
        try {
            const {id} = req.params
            let posts = await Post.findAll({where: {userId: id}})
            res.status(200).send(posts)
        }
        catch (error){
            console.log(error)
        }
    }
}