import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App fixed inset-8 max-w-[1090px] mx-auto flex gap-6">
      <Sidebar />
      <DashBoard />
    </div>
  );
}

export default App;
