import { useState } from "react";
import closeMenuIcon from "../assets/images/icon-menu-close.svg";
import menuIcon from "../assets/images/icon-menu.svg";

function Modal() {
  const [isOPen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOPen);
  }

  return (
    <>
      {isOPen ? (
        <div className="w-screen bg-black/30 absolute top-0 right-0 h-dvh flex justify-end transition-all duration-300">
          <div className="p-8  bg-white flex flex-col gap-12 items-start  text-black w-[65%] ">
            <div
              className="w-[50px] 
          ml-auto cursor-pointer"
              onClick={handleClick}
            >
              <img src={closeMenuIcon} alt="" className="w-full" />
            </div>
            <ul className="pt-10 text-3xl space-y-8">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>
      ) : (
        <img
          src={menuIcon}
          alt="menu"
          className="md:hidden cursor-pointer transition-all duration-300"
          onClick={handleClick}
        />
      )}
    </>
  );
}
export default Modal;
