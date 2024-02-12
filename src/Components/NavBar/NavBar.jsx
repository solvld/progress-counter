import React from 'react'
import { useTheme } from '../../hooks/useTheme';

import "./_navBar.scss"

function NavBar({addNew, setAddNew}) {
  const [onToggleTheme, isDarkTheme] = useTheme();
  const clickHandler = () => setAddNew(true)

  return (
    <nav className='Navbar'>
      <h1>Goals:</h1>
      <input type='checkbox' id='check' onChange={onToggleTheme}/>
      <label htmlFor="check" className='toggleBtn'></label>
      <button className='add-button' onClick={clickHandler}>Add New</button>
    </nav>
  )
}

export default NavBar

//useState 'show' or null