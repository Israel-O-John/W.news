function Nav() {
  return (
    <ul className="hidden md:flex  space-x-14 text-lg text-stone-500  ">
      <li className="hover:text-orange-400 cursor-pointer">Home</li>
      <li className="hover:text-orange-400 cursor-pointer">New</li>
      <li className="hover:text-orange-400 cursor-pointer">Popular</li>
      <li className="hover:text-orange-400 cursor-pointer">Trending</li>
      <li className="hover:text-orange-400 cursor-pointer">Categories</li>
    </ul>
  );
}
export default Nav;
