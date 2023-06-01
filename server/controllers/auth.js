const {User} = require('../util/models')


module.exports = {

    register: async (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        let validUser = await User.findOne({where: {username: username}})
        console.log(validUser)
        if(validUser) {
            return res.status(400).send("Username is taken")
        } else {
            let info = await User.create(req.body)
            console.log("REGISTER")
            res.status(200).send(info)
        }
    }, 
    login: async (req, res) => {
        //find username, password match in database 
        //if no match is found, alert "no username found"
        //if there is a match, allow user inside app
        const {username, password} = req.body
        let foundUser = await User.findOne({where: {username: username}})
        const isValidPassword = () => {
            if(password === foundUser.password) {
                console.log("happy path")
                return true
            } else {
                console.log("sad path :(")
            }
        }
        console.log(username, password)
        console.log(User)
        if(foundUser && isValidPassword()) {
            console.log("LOGIN")
            res.status(200).send({
                username: foundUser.username, 
                id: foundUser.id, 
                password: foundUser.password
            })
        } else {
            res.status(400).send("Incorrect username or password")
        }
    }
}