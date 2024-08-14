import React from 'react'
import navimg from '../../images/svgexport-1.svg'

const Navbar = () => {
  return (
    <div>
        <nav className='Navbar'>
            <img src={navimg} alt="" />
            <div className='navbar-right'>
                <a href="">Ecosystem</a>
                <a href="">Community</a>
                <a href="">Governance</a>
                <a href="">Developers</a>
                <a href="">Blog</a>
                <a href="">FAQ</a>
                <a href="">Jobs</a>
                <button className='navbutton'>Launch App</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar