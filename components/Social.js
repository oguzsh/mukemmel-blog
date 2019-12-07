import Link from "next/link";

const Social = () => (
  <ul className="hero-social-links">
    <Link href="https://github.com/oguzsh">
      <a className="social-link">Github</a>
    </Link>
    <Link href="https://www.twitter.com/oguz_sh">
      <a className="social-link">Twitter</a>
    </Link>
    <Link href="https://www.linkedin.com/in/oguzhanince">
      <a className="social-link">LinkedIn</a>
    </Link>
    <Link href="https://www.instagram.com/oguz.sh">
      <a className="social-link">Instagram</a>
    </Link>
    <style jsx>{`
      .social-link {
        margin-right: 8px;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
    `}</style>
  </ul>
);

export default Social;
