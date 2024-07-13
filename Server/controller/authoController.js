import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// test api
const test = (req, res) => {
  res.json("This is test APi");
};
//login user
async function loginUser(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect password" });
    }
    return res.json({ success: true, message: "Login successful" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "failed to login" });
  }
}

// register user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let newUser = null;
    // if user exist
    newUser = await User.findOne({ email });
    if (newUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    // if user doesn't exist
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ success: true, message: "User successfully Register" });
  } catch (e) {
    return res.status(500).json({ success: false, message: "Register error" });
  }
};
export default {
  test,
  registerUser,
  loginUser,
};
