import React, {Fragment} from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <Fragment>
      <nav className='nav-bar'>
        <h2 style={{cursor:'pointer'}}>Digital</h2>
        <div className='nav-pages'>
            <ul className='nav-list'>
                <li className='list'>Home</li>
                <li className='list'>Portfolio</li>
                <li className='list'>How it works</li>
                <li className='list'>Team</li>
            </ul>
            <div className='nav-btn'>
            <button className='btn-login'>Login</button>
            <button className='btn-signUp'>Sigin Up</button>
        </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default NavBar
