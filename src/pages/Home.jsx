import React from 'react'
import Header from '../components/Header/Header'
import Inicio from '../components/Inicio/Index'
import '../assets/styles/global.scss'

const Home =()=> {
    return (
        <React.Fragment>
            <Header/>
            <Inicio />
        </React.Fragment>
    )
}

export default Home
