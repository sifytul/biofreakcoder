import { connectDB } from "../../middlewares/connectDB"
import {Posts} from "../../models/postSchema"

export default async function handler(req, res) {
  const slug = req.query.slug
  await connectDB()
  const blogpost = await Posts.find({slug: slug})
    res.status(200).json(blogpost)
  }
  // http://localhost:3000/blogpost/learning-react-is-the-best-decision