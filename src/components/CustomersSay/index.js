import { FiStar } from "react-icons/fi";
import styles from "./styles.module.css";

export function CustomersSay() {
  return (
    <section className={styles.testimonials}>
      <div className={styles["section-testimonials-container"]}>
        <h2 className={styles["section-title"]}>Testimonials</h2>

        <div className={styles["testimonials-container"]}>
          <div className={styles["testimonials-card"]}>
            <span className={styles["rating"]}>
              <FiStar />5
            </span>
            <div className={styles["testimonials-image-name"]}>
              <img src="https://picsum.photos/536/354" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className={styles["review"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>

          <div className={styles["testimonials-card"]}>
            <span className={styles["rating"]}>
              <FiStar />
              4.8
            </span>
            <div className={styles["testimonials-image-name"]}>
              <img src="https://picsum.photos/536/314" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className={styles["review"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>

          <div className={styles["testimonials-card"]}>
            <span className={styles["rating"]}>
              <FiStar />
              4.9
            </span>
            <div className={styles["testimonials-image-name"]}>
              <img src="https://picsum.photos/536/334" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className={styles["review"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>
          <div className={styles["testimonials-card"]}>
            <span className={styles["rating"]}>
              <FiStar />
              4.7
            </span>
            <div className={styles["testimonials-image-name"]}>
              <img src="https://picsum.photos/536/324" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className={styles["review"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
