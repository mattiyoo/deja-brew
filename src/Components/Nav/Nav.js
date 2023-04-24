import '../Nav/nav.css'
import { useState } from 'react'

const Nav = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClickMenu = (event) => {
        setIsActive(current => ! current);
    }


    window.onscroll = () => {
        setIsActive(false)
    }

    return (
        <header>
            <a href="/" className="logo">Deja Brew</a>
            <div className='bx bx-menu' id="menu-icon" onClick={handleClickMenu}></div>

            <ul className={`navbar${isActive ? ' active' : ''}`} >
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        </header>
    );
}
 
export default Nav;