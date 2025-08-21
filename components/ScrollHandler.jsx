"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = window.location.hash;

      if (hash) {
        const targetId = hash.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 80;
          const elementPosition = element.offsetTop - headerHeight;

          // Scroll ke posisi elemen target
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Menangani scroll saat halaman dimuat
    handleScrollToSection();

    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash === hash) return; // Cegah scroll jika hash sama
      handleScrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
}
