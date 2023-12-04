import React from 'react'

import "./_navBar.scss"

function NavBar({addNew, setAddNew}) {
  const clickHandler = () => setAddNew(true)

  return (
    <nav className='Navbar'>
      <h1>Goals:</h1>
      <button className='add-button' onClick={clickHandler}>Add New</button>
    </nav>
  )
}

export default NavBar

//useState 'show' or null