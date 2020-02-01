const { User, Company } = require("../models")
const Labels = require("../json")
module.exports = {
    async index (req, res) {
        try {
            // const user = await req.hearders
            // res.send(user)
            var users = await User.find( {},{_id:0, __v:0, company:0})
            res.send ({
                users: users
                // user: "User Auth"
            })
        } catch (err) {
            res.status(500).send({
                error: "This is AuthController.index error"
            })
        }
    },
    async register (req, res) {
        try {
            
            // 1. Find the the actual school
            const company = await Company.findById({ _id: req.user.company });

            // 2. Create a new user
            const user = await req.body
            const setUser = {            
                username: user.username,
                email: user.email,
                password: user.password,
                company: req.user.company,
                role: user.role                
            }
            
            const addUser = await User.create(setUser)

            // 3. Add newly created user to the actual school
            company.users.push(addUser);
            
            await company.save();

            res.send({
                saved : true,
                message: "Create User Successfully"
            })
        } catch (err) {
            res.status(500).send({
                error: "This is Register"
            })
        }
    },


    async devRegister (req, res) {
        try {
            

            // 2. Create a new user
            const user = await User.create(req.body)

            res.send({
                saved : true,
                user: user,
                message: "Create User Successfully"
            })
        } catch (err) {
            res.status(500).send({
                error: "This is Register"
            })
        }
    },

    async login (req, res) {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password)
            const token = await user.generateAuthToken()
            const company = await Company.findOne({ _id: user.company },{ _id:0, __v:0})
            const labels = await Labels
            
            res.send({ user, company, token, labels})
        } catch (e) {
            res.status(400).send()
        }
    }
}