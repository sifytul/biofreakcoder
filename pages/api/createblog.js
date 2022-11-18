import { connectDB } from "../../middlewares/connectDB"
import {Posts} from "../../models/postSchema"

export default async function handler(req, res) {
  const data = req.body

  if (req.method === 'POST') {
    try{
    await connectDB()
    const post = await Posts.create(data)
    res.status(201).json({message: "success", post})
    }
    catch(err){
      console.log(err)
    }
  }
}