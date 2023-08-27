import styles from "./styles.module.css";

export function Chicago() {
  return (
    <section className={styles.about} id="about">
      <div className={styles["about-container"]}>
        <div className={styles["about-text"]}>
          <div className={styles["about-title"]}>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis
            harum, ea hic quasi odit a exercitationem non aut rerum. Delectus ea
            dolores nemo exercitationem voluptatibus numquam rem aliquid.
          </p>
        </div>
        <div className={styles["about-image"]}>
          <img
            src="./assets/mario-adrian.png"
            alt=""
            className={styles["mario-adrian"]}
          />
        </div>
      </div>
    </section>
  );
}
