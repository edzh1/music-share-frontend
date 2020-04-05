import React from "react";
import PropTypes from "prop-types";

function Sidebar({ children }) {
  return <div>{children}</div>;
}

export default Sidebar;

Sidebar.propTypes = {
  children: PropTypes.node,
};
