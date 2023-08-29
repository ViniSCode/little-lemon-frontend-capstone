import { useModal } from "@/hooks/useModal";
import styles from "./styles.module.css";
export function HeroSection() {
  const { setIsBookingModalOpen } = useModal();

  return (
    <section className={styles.hero}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-text"]}>
          <div className={styles["hero-title"]}>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            className={styles.button}
            onClick={() => setIsBookingModalOpen(true)}
          >
            Reserve a Table
          </button>
        </div>
        <div className={styles["hero-image"]}>
          <img src="./assets/hero.png" alt="Little lemon dish" />
        </div>
      </div>
    </section>
  );
}
