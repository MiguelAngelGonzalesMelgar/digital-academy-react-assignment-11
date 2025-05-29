import styles from "./navbar.module.css"


interface NavbarProps {
  navSteps:[];
  onStepclick: () => void;
  currentStepIndex: number;
}

const Navbar = ({ navSteps, onStepclick, currentStepIndex}: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          Wellcome
          <span className={styles.icon}>
            {/* for icons */}
          </span>
        </li>
        <li>
          Address
        </li>
        <li>
          Preferences
        </li>
        <li>
          Sign and submit
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
