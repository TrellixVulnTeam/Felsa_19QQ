import React from 'react'
import Layout from '../components/Layout/Layout'
import Inicio from '../components/Inicio/Index'
import '../assets/styles/global.scss'

const Home =()=> {
    return (
        <React.Fragment>
            <Layout>
                <Inicio />
            </Layout>
        </React.Fragment>
    )
}

export default Home
