import React, { Fragment } from "react";


import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;