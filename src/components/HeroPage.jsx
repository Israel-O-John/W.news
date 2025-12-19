import heroImgMobile from "../assets/images/image-web-3-mobile.jpg";
import heroImgDesktop from "../assets/images/image-web-3-desktop.jpg";

function HeroPage() {
  return (
    <div className="flex items-center flex-col pb-6 ">
      <img src={heroImgMobile} alt="Image" className="md:hidden" />
      <img src={heroImgDesktop} alt="Image" className="hidden md:block" />
      <div className="md:flex items-center gap-20 md:py-8">
        <h1 className="text-6xl md:text-5xl py-4 font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="space-y-3">
          <p className="text-xl font-medium text-stone-400 md:pb-4">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="py-3 px-4 uppercase tracking-[0.3em] bg-orange-600 text-xs font-bold hover:bg-blue-950 hover:text-white transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeroPage;
