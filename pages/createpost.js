import { useState } from "react";

const CreatePost = () => {
  const init = {
    title: "",
    category: "",
    content: "",
    metadesc:"",
    slug:"",
    author: "",
    image: ""
  };
  const [post, setPost] = useState({ ...init });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!post.title){
      return
    }
    if (!post.category){
      return
    }
    if (!post.content) {
      return
    }
    if (!post.metadesc){
      return
    }
    if (!post.slug){
      return
    }
    if (!post.author) {
      return
    }
    // post["slug"] = post.title.replace(/\s+/g, "-");
    fetch("http://localhost:3000/api/createblog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Thanks for creating post!! 😍 ");
      })
      .catch((err) => console.log(err));
    console.log();
    setPost({ ...init });
  };

  const changeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="max-w-md flex flex-col my-4 mx-auto p-4 rounded-sm shadow-md">
      <h3 className="text-center text-2xl mb-6 ">Create your post</h3>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label className="text-center">Give a title</label>
          <br />
          <input className="w-full p-2 rounded-md border border-gray-300  "
            name={"title"}
            placeholder={"What is JavaScript"}
            value={post.title}
            onChange={changeHandler}
          />
        </div>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label className="text-center">Category</label>
          <br />
          <input className="w-full p-2 rounded-md border border-gray-300  "
            name={"category"}
            placeholder={"Programming"}
            value={post.category}
            onChange={changeHandler}
          />
        </div>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label>Put your HTML Content </label>
          <br />
          <textarea className="w-full p-2 rounded-md border border-gray-300 "
            name={"content"}
            placeholder={"<div><p>JavaScript is a single-threaded nonblocking event-driven language...</p></div>"}
            value={post.content}
            onChange={changeHandler}
          />
        </div>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label>Put the short description</label>
          <br />
          <textarea className="w-full p-2 rounded-md border border-gray-300 "
            name={"metadesc"}
            placeholder={"JavaScript is a single-threaded nonblocking event-driven language..."}
            value={post.metadesc}
            onChange={changeHandler}
          />
        </div>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label>Enter the slug</label>
          <br />
          <input className="w-full p-2 rounded-md border border-gray-300 "
            name={"slug"}
            placeholder={"what-is-javascript"}
            value={post.slug}
            onChange={changeHandler}
          />
        </div>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label>Enter your name</label>
          <br />
          <input className="w-full p-2 rounded-md border border-gray-300 "
            name={"author"}
            placeholder={"John Doe"}
            value={post.author}
            onChange={changeHandler}
          />
        </div>
        <div className="p-3 rounded-sm hover:shadow-md duration-300 ease-in-out">
          <label>Put any relevant image link</label>
          <br />
          <input className="w-full p-2 rounded-md border border-gray-300 "
            name={"image"}
            placeholder={"https://www.shutterstock.com/fr/image-photo/bloggingblog-concepts-ideas-white-worktable-1029506242"}
            value={post.image}
            onChange={changeHandler}
          />
        </div>
        <button className="p-2 bg-black my-4 rounded-md text-white border-none" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
