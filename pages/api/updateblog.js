import { connectDB } from "../../middlewares/connectDB";
import {Posts} from "../../models/postSchema";

export default async function handler(req, res) {
  
  const slug = req.query.slug;
  const postdata = req.body;
  if (req.method === 'POST') {
    try{
      await connectDB();
      console.log('connected')
      await Posts.updateMany({ slug: slug },postdata);
      console.log('updated')

  
      res.status(200).json({ message: "success"});

    } catch(error) {
      console.log(error)
    }
  }
}
