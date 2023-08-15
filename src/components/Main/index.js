import { Chicago } from "../Chicago";
import { CustomersSay } from "../CustomersSay";
import { HeroSection } from "../HeroSection";
import { Specials } from "../Specials";

export function Main() {
  return (
    <>
      <main>
        <HeroSection />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
    </>
  );
}
