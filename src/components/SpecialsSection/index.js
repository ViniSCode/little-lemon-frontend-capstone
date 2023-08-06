import { DishesCards } from "./DishesCards";
import "./styles.css";

export function SpecialsSection() {
  return (
    <section className="section maxw">
      <div className="specials-menu">
        <h2>Specials</h2>
        <button className="button">Online Menu</button>
      </div>

      <DishesCards />
    </section>
  );
}
