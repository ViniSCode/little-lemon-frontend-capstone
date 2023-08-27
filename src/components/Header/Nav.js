import styles from "./styles.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <a href="/" role="navigation">
          <li>Home</li>
        </a>
        <a href="#about" role="navigation">
          <li>About</li>
        </a>
        <a href="#menu" role="navigation">
          <li>Menu</li>
        </a>
        <a href="#order-online" role="navigation">
          <li>Order Online</li>
        </a>
      </ul>
    </nav>
  );
}
