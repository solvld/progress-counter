import React from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';
import GoalTable from './Components/GoalTable/GoalTable';
import Popup from './Components/Popup/Popup';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GoalTable />
      <Popup />
    </div>
  );
}

export default App;
