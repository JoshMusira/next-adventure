import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(req, res) {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "User does not exist" })
        }
        console.log("user exists");


        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password" })
        }
        console.log(user);

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        const response = res.status(200).json({
            message: "Login successful",
            success: true,
        })
        res.cookies.set("token", token, {
            httpOnly: true,

        })
        return response;

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}