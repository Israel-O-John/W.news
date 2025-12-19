import Blogs from "./components/Blogs";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import NewNews from "./components/NewNews";

function App() {
  return (
    <div className="md:px-20 px-4 py-4  mx-auto max-w-[1440px]">
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
