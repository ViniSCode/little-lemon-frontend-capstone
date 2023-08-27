import { DishesCards } from "./DishesCards";
import styles from "./styles.module.css";

export function Specials() {
  return (
    <section className={styles.section} id="menu">
      <div className={styles["specials-menu"]}>
        <h2 className={styles.title}>Specials</h2>
        <button className={styles.button}>Online Menu</button>
      </div>

      <DishesCards />
    </section>
  );
}
