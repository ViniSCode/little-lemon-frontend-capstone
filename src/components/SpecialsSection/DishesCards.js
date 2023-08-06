import { MdDeliveryDining } from "react-icons/md";
import "./cards.css";

export function DishesCards() {
  return (
    <div className="dishes-container">
      <div className="dish-card">
        <div className="dish-image">
          <img src="/assets/salad.png" alt="greek salad" />
        </div>
        <div className="dish-info">
          <div className="dish-name-price">
            <span>Greek salad</span>
            <span>$12.99</span>
          </div>
          <p className="dish-description">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <button className="delivery-button">
            Order a delivery
            <MdDeliveryDining />
          </button>
        </div>
      </div>

      <div className="dish-card">
        <div className="dish-image">
          <img src="/assets/bruchetta.png" alt="greek salad" />
        </div>
        <div className="dish-info">
          <div className="dish-name-price">
            <span>Bruchetta</span>
            <span>$ 5.99</span>
          </div>
          <p className="dish-description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <button className="delivery-button">
            Order a delivery
            <MdDeliveryDining />
          </button>
        </div>
      </div>

      <div className="dish-card">
        <div className="dish-image">
          <img src="/assets/dessert.png" alt="greek salad" />
        </div>
        <div className="dish-info">
          <div className="dish-name-price">
            <span>Lemon Dessert</span>
            <span>$ 5.00</span>
          </div>
          <p className="dish-description">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button className="delivery-button">
            Order a delivery
            <MdDeliveryDining />
          </button>
        </div>
      </div>
    </div>
  );
}
