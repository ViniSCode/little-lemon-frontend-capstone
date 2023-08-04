import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MobileMenu } from "../MobileMenu";
import { Nav } from "../Nav/index";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="header maxw">
        <img src="/assets/little-lemon-logo.png" alt="Little Lemon" />
        <Nav />
        <FiMenu
          className="open-menu-icon"
          size={30}
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </header>
      {isMobileMenuOpen && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
      )}
    </>
  );
}
