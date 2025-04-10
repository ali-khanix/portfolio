import Link from "next/link";

// Components
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header-tws">
      <div className="nav-container-tws">
        {/* LOGO */}
        <Link href={"/"}>
          <h1 className="heading-1-tws">
            Ali<span className="text-accentDefault">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}

        <div className="hidden lg:flex">
          <Nav />
          <Link className="cursor-pointer" href={"/contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
