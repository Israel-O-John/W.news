import Blogs from "./components/Blogs";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import NewNews from "./components/NewNews";

function App() {
  return (
    <div className="px-20  mx-auto max-w-[1440px]">
      <Header />
      <main>
        <div className="md:flex gap-6 items-start pt-6">
          <HeroPage />
          <NewNews />
        </div>
        <Blogs />
      </main>
    </div>
  );
}
export default App;
