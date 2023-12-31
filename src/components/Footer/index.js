import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="./assets/footer-logo.png"
        alt="Little Lemon logo"
        className={styles["footer-logo"]}
      />

      <div className={styles["links-container"]}>
        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#menu">
              <li>menu</li>
            </a>
            <a href="#reservations">
              <li>Reservations</li>
            </a>
            <a href="#order-online">
              <li>Order Online</li>
            </a>
            <a href="/login">
              <li>Login</li>
            </a>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <a href="#Address">
              <li>Address</li>
            </a>
            <a href="#phone">
              <li>phone number</li>
            </a>
            <a href="#email">
              <li>email</li>
            </a>
          </ul>
        </div>

        <div>
          <h3>Social Media Links</h3>
          <ul>
            <a href="#Address">
              <li>Address</li>
            </a>
            <a href="#phone">
              <li>phone number</li>
            </a>
            <a href="#email">
              <li>email</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
