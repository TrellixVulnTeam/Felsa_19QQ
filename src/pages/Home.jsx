import React from 'react'
import Header from '../components/Header'
import Characters from '../components/Characters'
import '../assets/styles/global.scss'

const Home =()=> {
    return (
        <React.Fragment>
                <Header/>
                <Characters />
        </React.Fragment>
    )
}

export default Home
