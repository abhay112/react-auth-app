import bcrypt from 'bcrypt';
import UserModel from '../model/User.model.js'

export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check for existing username
        const existUserName = await UserModel.findOne({ username });
        if (existUserName) {
            return res.status(400).send({ error: "Please use a unique username" });
        }

        // Check for existing email
        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.status(400).send({ error: "Please use a unique email" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new UserModel({
            username,
            password: hashedPassword,
            profile: profile || '',
            email
        });

        // Save the user to the database
        const result = await user.save();

        res.status(201).send({ msg: "User registered successfully" });
    } catch (error) {
        res.status(500).send({ error: error.message || "Internal server error" });
    }
}

export async function login(req,res){
    res.json('register route');
}

export async function getUser(req,res){
    res.json('register route');
}

export async function updateUser(req,res){
    res.json('register route');
}

export async function generateOTP(req,res){
    res.json('register route');
}
export async function verifyOTP(req,res){
    res.json('register route');
}

export async function createResetSession(req,res){
    res.json('register route');
}


export async function resetPassword(req,res){
    res.json('register route');
}
