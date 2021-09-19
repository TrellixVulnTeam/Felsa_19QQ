import React from 'react'
import {MainLog,Fondo, Logo , NavLink} from './style'
import midLogo from '../../assets/images/mid.png'


const Inicio = () => {
    return (
        
        <MainLog >

            <Fondo > 
                    <Logo src={midLogo} alt="" />
                    <NavLink to="/login"> Iniciar Sesión</NavLink>
                    {/* <NavLink> Registrarse</NavLink> */}

            </Fondo>
        </MainLog>
    )
}

export default Inicio
