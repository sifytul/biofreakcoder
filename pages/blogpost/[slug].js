import Image from "next/image";
import { useState } from "react";

const Slug = ({ myBlog }) => {
  const [post, setPost] = useState(myBlog[0]);
  console.log(post);
  const createdAt = new Date(post.createdAt).toLocaleDateString();
  const createMarkup = (c) => {
    return { __html: c };
  };
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col max-w-7xl justify-center items-center p-2 mt-10">
          <div className="flex flex-col w-[90%] md:w-3/4 text-center items-center justify-center space-y-3">
            <div className="text-3xl sm:text-4xl font-bold ">{post.title}</div>
            <div className="text-xl font-semibold text-gray-400 space-x-4">
              <span>{post.author}</span>
              <span>{createdAt}</span>
            </div>
            <div className="md:text-lg">
              <input
                className="bg-gray-200/70 border shadow-gray-700 rounded-2xl placeholder-slate-400 px-4 py-1 focus:outline-none "
                type="email"
                placeholder="E-mail Address"
              />
              <button className="p-1 m-2 rounded-2xl text-white bg-blue-500 px-4 font-semibold  hover:bg-blue-900 hover:trandform ease-in-out duration-300">
                Subscribe{" "}
              </button>
            </div>
          </div>
          <div>
            <div className="w-3/4 md:w-3/5 h-60  my-4  rounded-lg mx-auto flex flex-col items-center">
              <img
                className="lg:h-56 md:h-48 items-center"
                src={post.image}
                alt="blog"
                width={300}
                height={200}
              />
              <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  let data = await fetch(`http://localhost:3000/api/getblogpost?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}
