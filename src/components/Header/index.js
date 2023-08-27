import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MobileMenu } from "../MobileMenu";
import { Nav } from "./Nav";
import styles from "./styles.module.css";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <img src="/assets/little-lemon-logo.png" alt="Little Lemon" />
          <Nav />
        </div>
        <FiMenu
          className={styles["open-menu-icon"]}
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
