import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HeaderLogo, LineYellow} from './style'
import imagen from '../../assets/images/small.png'
import '../../assets/styles/global.scss'

const Header =(props) => {

    const [activo, setActivo] = useState('menuppal');

    const handleClick = () => {
      if (activo === 'menuppal') {
        setActivo('menuppal is_active');
      } else {
        setActivo('menuppal');
      }
    };
    return (
        <>
        <LineYellow />
            <HeaderLogo> 
                <img src={imagen} alt="" />

            </HeaderLogo>
        <div className="hamburger" onClick={handleClick}>
            <div className="_layer -top" />
            <div className="_layer -mid" />
            <div className="_layer -bottom" />
        </div>
        <nav className={activo}>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/ordenar">Ordenar</Link>
            </li>
            <li>
                <Link to="/checkout">Carrito</Link>
            </li>
            <li>
                <Link to="/checkout/information">Form</Link>
            </li>
            </ul>
        </nav>
        </>
    
    )
}

export default Header
