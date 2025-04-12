import Link from "next/link";

// Components
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

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

        {/* Desktop Nav & Hire me button*/}
        <div className="desktop-nav">
          <Nav />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="mobile-nav">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
