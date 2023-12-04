import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';

import './App.scss';
import GoalTable from './Components/GoalTable/GoalTable';
import Popup from './Components/Popup/Popup';

function App() {

  const [popupActive, setPopupActive] = useState(false)

  return (
    <div className="App">
      <NavBar addNew={popupActive} setAddNew={setPopupActive}/>
      <GoalTable />
      <Popup active={popupActive} setActive={setPopupActive} />
    </div>
  );
}

export default App;
