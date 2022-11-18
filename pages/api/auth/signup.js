import bcrypt from "bcryptjs";
import { connectDB } from "../../../middlewares/connectDB";
import { User } from "../../../models/postSchema";

export default async function handler(req, res) {
  const { name, email, password } = req.body;
  if (req.method === "POST") {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    try {
      await connectDB();
      const isUser = await User.findOne({ email: email });
      if (isUser) {
        return res.status(400).json({ message: "User already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      const user = await User.create({ name, email, password:hashedPass });
      res.status(200).json({ message: "Success", user });
    } catch (e) {
      console.log(e);
    }
  }
}
