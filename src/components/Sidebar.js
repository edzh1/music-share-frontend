import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const SidebarUI = styled.div`
  width: 300px;
  background-color: rgb(18, 18, 18);
`;

function Sidebar({ children }) {
  return <SidebarUI>{children}</SidebarUI>;
}

export default Sidebar;

Sidebar.propTypes = {
  children: PropTypes.node,
};
