import React from 'react';
import Sidebar from '../components/Sidebar';
import SidebarLink from '../components/SidebarLink';
import ShareContainer from './Share';

function App() {
  return (
      <div>
        <Sidebar>
          <SidebarLink>Share</SidebarLink>
        </Sidebar>
        <div>
          <ShareContainer />
        </div>
      </div>
  );
}

export default App;
