"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { name: "home", path: "/", hash: "#home" },
  { name: "about", path: "/", hash: "#about" },
  { name: "resume", path: "/", hash: "#resume" },
  { name: "contact", path: "/", hash: "#contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Pastikan hanya di client-side
    if (typeof window === "undefined") return;

    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (e, link) => {
    e.preventDefault();

    // Pastikan hanya di client-side
    if (typeof window === "undefined") return;

    if (pathname === "/") {
      const element = document.getElementById(link.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", link.hash);
        setCurrentHash(link.hash);
      }
    } else {
      window.location.href = `/${link.hash}`;
    }
  };

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        const isActive = pathname === "/" && currentHash === link.hash;

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
