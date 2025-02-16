import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css"; // Import CSS module
import Image from "next/image";

// Define the props interface
interface SplashScreenProps {
  onFinish: () => void; // Callback function when the splash screen finishes
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [counter, setCounter] = useState<number>(0); // Counter state with type `number`
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false); // Fading state with type `boolean`

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 100);

    if (counter === 10) {
      clearInterval(interval);
      setIsFadingOut(true); // Trigger fade-out
      setTimeout(() => {
        onFinish(); // Notify parent component after fade-out
      }, 300); // Match the duration of the fade-out animation
    }

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [counter, onFinish]);

  return (
    <div className={`${styles.splashScreen} ${isFadingOut ? styles.fadeOut : ''}`}>
      {/* Logo in the top-left corner */}
      <div>
        <div className={styles.logo}>
          <Image
            src="/images/OX_Logo_black.png" // Path to your logo image in the `public` folder
            alt="Logo"
            width={200} // Set the width of the logo
            height={150} // Set the height of the logo
          />
        </div>
      </div>
      <div className={styles.counter}>
        <h1 className={styles.gradientText}>
          {counter}x
        </h1>{" "}
        {/* Display the counter */}
      </div>
    </div>
  );
};

export default SplashScreen;