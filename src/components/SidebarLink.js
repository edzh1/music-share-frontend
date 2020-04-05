import React from "react";
import PropTypes from "prop-types";

function SidebarLink({ children }) {
  return <div>{children}</div>;
}

export default SidebarLink;

SidebarLink.propTypes = {
  children: PropTypes.node,
};
