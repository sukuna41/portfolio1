// components/Footer.jsx
"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 mt-20">
      <div className="px-6 md:px-12 lg:px-24 py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Gilang<span className="text-accent">.</span>
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Web Developer specializing in modern web technologies and user
              experience.
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="md:text-right font-semibold mt-4 mb-4">
              Get in Touch
            </h4>
            <div className="md:text-right space-y-1 text-muted-foreground">
              <p>rgilang739@gmail.com</p>
              <p>+62 888-0202-0077</p>
              <p>Kuningan, Jawa Barat, ID</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground flex justify-between items-center gap-1 text-accent">
            © 2024 Made with by Gilang
          </p>

          <div className="flex text-accent gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:gilang@example.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
