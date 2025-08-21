"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScrollToSection = () => {
      if (pathname === "/") {
        const hash = window.location.hash;

        if (hash) {
          const targetId = hash.replace("#", "");
          const element = document.getElementById(targetId);

          if (element) {
            // Cegah multiple scroll triggers
            if (window.__isScrolling) return;
            window.__isScrolling = true;

            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 80;
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });

            // Reset flag setelah scroll selesai
            setTimeout(() => {
              window.__isScrolling = false;
            }, 1000);
          }
        }
      }
    };

    handleScrollToSection();

    // Handle hash changes
    const handleHashChange = () => {
      handleScrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, searchParams]);

  return null;
}
