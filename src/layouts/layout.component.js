import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Header from "../components/widgets/Header";

const Layout = props => (
  <>
    <Header />
    {props.children}
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default withRouter(Layout);
