import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Header =(props) => {
    const {darkmode, setDarkmode} = useContext(ThemeContext);



    const handleClick = () =>{
        darkmode === 'light' ? setDarkmode('dark') : 
        darkmode === 'dark' ? setDarkmode('light') : setDarkmode('dark')
    }
    return (
        <div className={props.dark}> 
            <h1  >reacthooks </h1>

            <button type="button" onClick={handleClick}>expichame </button>
        </div>
    )
}

export default Header
