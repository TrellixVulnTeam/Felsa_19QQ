import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HeaderLogo, LineYellow, Footer, ImgLink} from './style'
import '../../assets/styles/global.scss'


import imagen from '../../assets/images/small.png'
import garena from '../../assets/images/header/garena.png'
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
            <ImgLink to="/">
                    <img src={imagen} alt="" />
            </ImgLink>

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
                <Link to="/policy">Politica de privacidad</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/regalo">Ruleta</Link>
            </li>
            </ul>
        </nav>
        {props.children}
        <Footer>
            <img src={garena} alt="logo de garena" />
            <h1>Copyright © Garena International. </h1>
            <p>Trademarks belong to their respective owners. All rights Reserved.</p>
            <div>
                <Link to="/policy">Seguridad del juego</Link>
                <Link  to="/policy">control parental</Link>
                <Link  to="/policy">política de privacidad</Link>


            
            </div>
        </Footer>
        </>
      




    
    )
}

export default Header
