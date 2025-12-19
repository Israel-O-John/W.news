function Blog({ blog }) {
  return (
    <div className="flex gap-6 items-center pb-8">
      <img src={blog.imgSrc} alt={blog.title} className="w-[100px]" />
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-red-500">{blog.blogNum}</h2>
        <h3 className="text-lg font-bold hover:text-red-500 cursor-pointer">
          {blog.title}{" "}
        </h3>
        <p className="text-stone-400 text-lg"> {blog.content} </p>
      </div>
    </div>
  );
}
export default Blog;
