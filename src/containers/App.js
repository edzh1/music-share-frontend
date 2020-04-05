import React from "react";
import Sidebar from "../components/Sidebar";
import SidebarLink from "../components/SidebarLink";
import styled from "@emotion/styled";
import ShareContainer from "./Share";

const PageUI = styled.div`
  display: flex;
  flex: 1;
`;

const MainUI = styled.div`
  flex: 1;
  background-color: rgb(24, 24, 24);
`;

function App() {
  return (
    <PageUI>
      <Sidebar>
        <SidebarLink>Share</SidebarLink>
      </Sidebar>
      <MainUI>
        <ShareContainer />
      </MainUI>
    </PageUI>
  );
}

export default App;
