const {Post, User} = require('../util/models')

module.exports = {
    addPost: async (req, res) => {
        try {
            const newDate = new Date()
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
    }, 
    deletePost: async (req, res) => {
        try {
            const {id} = req.params
            await Post.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(400)
        }
    } 
}