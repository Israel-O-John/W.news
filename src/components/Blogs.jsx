import Blog from "./Blog";
import imgRetroPcs from "../assets/images/image-retro-pcs.jpg";
import imgTopLaptops from "../assets/images/image-top-laptops.jpg";
import imgGrowthGaming from "../assets/images/image-gaming-growth.jpg";

function Blogs() {
  const blogs = [
    {
      id: 1,
      blogNum: "01",
      imgSrc: imgRetroPcs,
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: 2,
      blogNum: "02",
      imgSrc: imgTopLaptops,
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
    },
    {
      id: 3,
      blogNum: "03",
      imgSrc: imgGrowthGaming,
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <div className="md:flex md:gap-4">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
export default Blogs;
