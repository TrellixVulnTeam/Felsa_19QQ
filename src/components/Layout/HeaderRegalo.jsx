import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HeaderLogo, LineYellow, Heroico, HeroicoImg} from './styleRegalo'
import imagen from '../../assets/images/small.png'
import heroico from '../../assets/images/header/heroico.png'


const HeaderRegalo =(props) => {

    return (
        <>
        <LineYellow />
            <HeaderLogo> 
                <img src={imagen} alt="" />
                <Heroico>
                    <HeroicoImg src={heroico} />
                    <p>User: {props.user}</p>
                    </Heroico>
            </HeaderLogo>
      
        </>
    
    )
}

export default HeaderRegalo
