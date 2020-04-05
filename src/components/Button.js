import React from "react";
import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <div>
      <input type="button" value={children} />
    </div>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
};
