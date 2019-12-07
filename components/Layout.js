import Header from "./Header";

const layoutStyle = {
  margin: "50px",
  display: "flex",
  justifyContent: "center",
  textAling: "center"
};

const Layout = props => (
  <div>
    <Header />
    <div style={layoutStyle}>{props.children}</div>
    <style jsx>
      {`
        @import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap");
        font-family: "Poppins", sans-serif;
      `}
    </style>
  </div>
);

export default Layout;
