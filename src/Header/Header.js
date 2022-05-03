import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className='header'>
      {/* BEM Naming Convection __ */}

      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />

        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__middle"></div>


      <div className="header__right"></div>
    </div>
  )
}

export default Header