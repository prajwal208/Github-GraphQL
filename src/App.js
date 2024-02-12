import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import environment from './components/relayEnvironment'
import Navbar from './components/Navbar';
import Sidebar from './components/HomeSideBar/Sidebar';

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="App">
        <Navbar />
        <Sidebar />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
