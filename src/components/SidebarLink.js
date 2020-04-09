import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const SidebarLinkUI = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: #545859;
  text-transform: uppercase;
  font-size: 24px;
  color: #fff;
`;

function SidebarLink({ children }) {
  return <SidebarLinkUI>{children}</SidebarLinkUI>;
}

export default SidebarLink;

SidebarLink.propTypes = {
  children: PropTypes.node,
};
