// components/Footer.jsx
"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 mt-8">
      <div className="px-6 md:px-12 lg:px-24 py-4">
        {/* Bottom Bar */}
        <div className=" border-white/10  flex flex-row justify-between items-center">
          <p className="text-muted-foreground flex justify-between items-center text-accent">
            ©2025 Made by Gilang
          </p>

          <div className="flex text-accent gap-4">
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:gilang@example.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
