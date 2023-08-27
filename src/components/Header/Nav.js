import { useRouter } from "next/router";
import styles from "./styles.module.css";

export function Nav() {
  const router = useRouter();

  const scrollTo = (id) => {
    if (router.pathname !== "/") {
      router.push(`/#${id}`);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <a href="#home" role="navigation" onClick={() => scrollTo("home")}>
          <li>Home</li>
        </a>
        <a href="#about" role="navigation" onClick={() => scrollTo("about")}>
          <li>About</li>
        </a>
        <a href="#menu" role="navigation" onClick={() => scrollTo("menu")}>
          <li>Menu</li>
        </a>
        <a href="#" role="navigation">
          <li>Order Online</li>
        </a>
      </ul>
    </nav>
  );
}
