import { FiStar } from "react-icons/fi";
import "./styles.css";
export function CustomersSay() {
  return (
    <section className="section testimonials">
      <div className="maxw">
        <h2>Testimonials</h2>

        <div className="testimonials-container">
          <div className="testimonials-card">
            <span className="rating">
              <FiStar />5
            </span>
            <div className="testimonials-image-name">
              <img src="https://picsum.photos/536/354" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className="review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>

          <div className="testimonials-card">
            <span className="rating">
              <FiStar />
              4.8
            </span>
            <div className="testimonials-image-name">
              <img src="https://picsum.photos/536/314" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className="review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>

          <div className="testimonials-card">
            <span className="rating">
              <FiStar />
              4.9
            </span>
            <div className="testimonials-image-name">
              <img src="https://picsum.photos/536/334" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className="review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed
              perspiciatis soluta sapiente fugit tempore veritatis. Minus
              suscipit incidunt omnis dolores aliquid repudiandae rem?
            </span>
          </div>
          <div className="testimonials-card">
            <span className="rating">
              <FiStar />
              4.7
            </span>
            <div className="testimonials-image-name">
              <img src="https://picsum.photos/536/324" alt="avatar" />
              <p className="name">John Doe</p>
            </div>
            <span className="review">
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
