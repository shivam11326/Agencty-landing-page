 import { Container } from "../shared/Container";
import logo from "/workspaces/Agencty-landing-page/src/assets/S.png";
import { navItems } from "./Navbar";
import { NavItem } from "/workspaces/Agencty-landing-page/src/components/shared/Navitem.tsx";
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt="SHAI Logo" />
            <span className="text-lg font-semibold text-heading-1">SHAI</span>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.text} />
            ))}
          </ul>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="mailto:your@email.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6 text-heading-1 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-heading-1 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 text-heading-1 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-heading-1 hover:text-pink-500 transition" />
            </a>
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
            >
              <FaGlobe className="w-6 h-6 text-heading-1 hover:text-green-600 transition" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};