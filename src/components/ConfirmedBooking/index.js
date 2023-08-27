import { useRouter } from "next/router";
import { FiCheckCircle } from "react-icons/fi";
import styles from "./styles.module.css";

export default function ConfirmedBooking() {
  const router = useRouter();

  function handleGoBack() {
    router.push("/");
  }

  return (
    <div className={styles.confirmationContainer}>
      <FiCheckCircle size={40} className={styles.checkIcon} />
      <h1 className={styles.confirmationTitle}>success</h1>
      <p className={styles.description}>
        Your table reservation was successful!
      </p>
      <button className={styles.button} onClick={handleGoBack}>
        Go Back to Home
      </button>
    </div>
  );
}
