import React from "react";
import PropTypes from "prop-types";

function Meta({ children }) {
  return <div>{children}</div>;
}

export default Meta;

Meta.propTypes = {
  children: PropTypes.node,
};
