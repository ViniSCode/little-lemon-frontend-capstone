import { useRouter } from "next/router";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";

export function MobileMenu({ setIsMobileMenuOpen }) {
  const router = useRouter();

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);

    if (router.pathname !== "/") {
      router.push(`/#${id}`);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles["mobile-menu-container"]}>
      <FiX
        className={styles["close-menu-icon"]}
        size={30}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <nav>
        <ul>
          <a href="#" role="navigation" onClick={() => scrollTo("home")}>
            <li>Home</li>
          </a>
          <a href="#about" role="navigation" onClick={() => scrollTo("about")}>
            <li>About</li>
          </a>
          <a href="#menu" role="navigation" onClick={() => scrollTo("menu")}>
            <li>Menu</li>
          </a>
          <a href="#order-online" role="navigation">
            <li>Order Online</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
