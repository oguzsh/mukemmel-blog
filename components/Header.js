import Social from "./Social";
import styles from "./styles";

const Header = () => (
  <div style={styles.heroStyle}>
    <a href="/" style={styles.titleStyle}>
      OĞUZHAN İNCE
    </a>
    <p style={styles.subtitleStyle}>Frontend Developer</p>
    <Social />
  </div>
);

export default Header;
