"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  { name: "home", path: "/", hash: "#home" },
  { name: "about", path: "/", hash: "#about" },
  { name: "resume", path: "/", hash: "#resume" },
  { name: "contact", path: "/", hash: "#contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (link) => {
    setIsOpen(false);

    // Pastikan hanya di client-side
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(link.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", link.hash);
        }
      }, 100);
    } else {
      window.location.href = `/${link.hash}`;
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[44px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-1 mb-32 text-left text-2xl">
          <a
            href="/#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation({ hash: "#home" });
            }}
            className="cursor-pointer"
          >
            <h1 className="text-4xl font-semibold">
              <span className="text-accent">[</span>G
              <span className="text-accent">]</span>
            </h1>
          </a>
        </div>
        <nav className="flex px-2 flex-col justify-center items-start gap-6">
          {links.map((link, index) => (
            <a
              href={link.path + link.hash}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link);
              }}
              className="text-2xl capitalize hover:text-accent transition-all cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
