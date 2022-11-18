import { connectDB, disconnectDB } from "../../middlewares/connectDB"
import {Posts} from "../../models/postSchema"

export default async function handler(req, res) {
  await connectDB()
  const posts = await Posts.find()
  await disconnectDB()
  res.status(200).json(posts)
  }