import "./styles.css";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="maxw hero-container">
        <div className="hero-text">
          <div className="hero-title">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="./assets/hero.png" alt="Little lemon dish" />
        </div>
      </div>
    </section>
  );
}
