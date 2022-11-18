import { model, models, Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    slug: { type: String, required: true , unique: true},
    metadesc: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const Posts = models.Posts || model("Posts", postSchema)

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (prop) => `Invalid Email: ${prop.value}`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
    default: ["Student"],
  },
});

export const User = models.User || model("User", userSchema);