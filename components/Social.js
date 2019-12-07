import styles from "./styles";

const Social = () => (
  <ul style={styles.socialLinks}>
    <a
      href="https://github.com/oguzsh"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.socialItem}
    >
      Github
    </a>
    <a
      href="https://www.twitter.com/oguz_sh"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.socialItem}
    >
      Twitter
    </a>
    <a
      href="https://www.linkedin.com/in/oguzhanince"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.socialItem}
    >
      LinkedIn
    </a>
    <a
      href="https://www.instagram.com/oguz.sh"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.socialItem}
    >
      Instagram
    </a>
  </ul>
);

export default Social;
