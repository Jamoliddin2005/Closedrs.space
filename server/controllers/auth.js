const Users = require('../models/User')
const bcrypt = require('bcrypt')

exports.Register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const users = new Users({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
        })
        await users.save()

        const UsersFind = await Users.find()
        res.status(201).json({ message: "Аккаунт успешно создана", data: UsersFind })
    } catch (error) {
        console.log(error);
    }
}