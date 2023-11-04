import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.body;
        const { username, email, password } = reqBody;

        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();

        return res.status(200).json({
            message: "User created successfully",
            success: true,
            savedUser,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
