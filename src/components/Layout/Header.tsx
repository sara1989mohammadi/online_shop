import Logo from "./Logo";
import Search from "./Search";
import Icons from "./Icons";

const Header = () => {
  return (
    <header className="py-5 bg-white shadow-md">
      <div className="container flex items-center justify-between">
        <Logo />
        <Search />
        <Icons />
      </div>
    </header>
  );
};

export default Header;
