import User from "../model/User.js"
import bcrypt from 'bcryptjs'

export const loginall = async (req, res) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (error) {

        return console.log("failed to find user from the database", error)

    }
    if (!existingUser) {
        return res.status(404).json({ message: "login fail, no user available with this email" })
    }

    let iscorrectPassword = bcrypt.compareSync(password,existingUser.password);

    if (iscorrectPassword) {
        return res.status(200).json({ message: "login successful", user: existingUser })
    }
}