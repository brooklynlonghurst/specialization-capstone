module.exports = {
    register: async (req, res) => {
        console.log("REGISTER")
        res.status(200).send("Registerd")
    }, 
    login: async (req, res) => {
        console.log("LOGIN")
        res.status(200).send("Logged In")
    }
}