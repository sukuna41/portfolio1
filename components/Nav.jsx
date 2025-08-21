"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/", hash: "#home" },
  { name: "about", path: "/", hash: "#about" },
  { name: "resume", path: "/", hash: "#resume" },
  { name: "contact", path: "/", hash: "#contact" },
];

const Nav = () => {
  const pathname = usePathname();

  const handleNavigation = (e, link) => {
    e.preventDefault();

    if (pathname === "/") {
      // Jika sudah di homepage, scroll ke section
      const element = document.getElementById(link.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash tanpa reload
        window.history.pushState(null, "", link.hash);
      }
    } else {
      // Jika tidak di homepage, redirect ke homepage dengan hash
      window.location.href = `/${link.hash}`;
    }
  };

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        const isActive = pathname === "/" && window.location.hash === link.hash;

        return (
          <a
            href={link.path + link.hash}
            key={index}
            onClick={(e) => handleNavigation(e, link)}
            className={`${
              isActive && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all cursor-pointer`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
