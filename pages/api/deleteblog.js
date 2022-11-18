import { connectDB } from "../../middlewares/connectDB"
import {Posts} from "../../models/postSchema"

export default async function handler(req, res) {
  const slug = req.query.query
  await connectDB()
  await Posts.deleteMany({slug: slug})
    res.status(200).json({ message:"success" })
  }