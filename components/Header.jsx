import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-current/80 backdrop-blur-xl px-6 md:px-12 lg:px-24 py-4 text-white">
      <div className="flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            <span className="text-accent">[</span>Gilang
            <span className="text-accent">]</span>
          </h1>
        </Link>

        {/* dekstop nav & hire me button*/}
        <div className="hidden md:flex items-center gap-4">
          <Nav />
        </div>

        {/* mobile nav */}
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
