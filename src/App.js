import React from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';
import GoalTable from './Components/GoalTable/GoalTable';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GoalTable />
    </div>
  );
}

export default App;
