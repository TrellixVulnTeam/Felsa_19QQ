import React from 'react'
import { FaceApp, Form, NavLink, Lenguages, Main } from './style'
import cell from '../../assets/images/fblogin/celular.png'
import face from '../../assets/images/fblogin/face.svg'

const Logeo = () => {
    return (
        <Main>
        <FaceApp>
           <img src={cell} alt="" />
            <span>Descarga Facebook para iPhone y navega más rápido.</span>
        </FaceApp>
        <Form>
            <img src={face} alt="" />
            <input type="email" placeholder="Número de celular o correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <NavLink>Iniciar Sesión</NavLink>
        </Form>
        <Lenguages>
          <ul>
              <li>Español</li>
              <li>Francais(France)</li>
              <li>Deutsch</li>
              <li>العربية</li>
   
          </ul>
          <ul>
              <li>English (US)</li>
              <li>Portugués(Brasil)</li>
              <li>Italiano</li>
          </ul>
          
        </Lenguages>
        <p>Facebook Inc</p>
        </Main>
    )
}

export default Logeo
