function NewNews() {
  return (
    <div className="py-8 px-6 bg-blue-950  space-y-4 md:space-y-2 text-gray-500 mb-8 md:w-[60%]">
      <h2 className="text-3xl text-orange-500 font-semibold pb-3">New</h2>
      <div className="space-y-8 ">
        <div className="border-b border-b-gray-50 pb-8 md:pb-6">
          <h3 className="news-title">Hydrogen VS Electric Cars</h3>
          <p className="text-sm">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="border-b border-b-gray-50 pb-8 md:pb-6">
          <h3 className="news-title">The Downsides of AI Artistry</h3>
          <p className="text-sm">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div>
          <h3 className="news-title">Is VC Funding Drying Up?</h3>
          <p className="text-sm">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}
export default NewNews;
