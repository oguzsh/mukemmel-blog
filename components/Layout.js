import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx>
      {`
        @import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap");
      `}
    </style>
  </div>
);

export default Layout;
