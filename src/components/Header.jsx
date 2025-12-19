import Modal from "./Modal";
import Nav from "./Nav";

function Header() {
  return (
    <header className="flex py-6 items-center justify-between ">
      <img src="/logo.svg" alt="Logo" />
      <div className="md:hidden  ">
        <Modal />
      </div>
      <Nav />
    </header>
  );
}
export default Header;
