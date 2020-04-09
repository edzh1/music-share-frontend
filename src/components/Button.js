import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick }) {
  return (
    <div>
      <input type="button" value={children} onClick={onClick} />
    </div>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
