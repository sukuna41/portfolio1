import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="px-6 md:px-12 lg:px-24 h-full pt-4 pb-6   text-white">
      <div className="flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            <span className="text-accent">[</span>void
            <span className="text-accent">]</span>
          </h1>
        </Link>

        {/* dekstop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-4">
          <Nav />
          {/* <Link href="/contact">
            <Button className="rounded-lg">Lets Connect</Button>
          </Link> */}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
