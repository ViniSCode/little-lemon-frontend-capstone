import "./styles.css";

export function Nav() {
  return (
    <nav className="nav">
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
        <a href="#reservations" role="navigation">
          <li>Reservations</li>
        </a>
        <a href="#order-online" role="navigation">
          <li>Order Online</li>
        </a>
        <a href="/login" role="navigation">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
}
