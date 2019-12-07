import Social from "./Social";

const Header = () => (
  <div className="hero">
    <h1 className="hero-title"> Selman Kahya </h1> <Social />
    <style jsx>
      {`
        .hero {
          text-align: center;
          margin: 96px 0;
        }

        .hero-title {
          font-size: 48px;
        }
      `}
    </style>
  </div>
);

export default Header;
