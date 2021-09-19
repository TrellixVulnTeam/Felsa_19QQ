import styled from 'styled-components'

export const Heroico = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    color: white;
    img{
        margin-left: 0;
        padding-left: 0;
    }
    p{
        font-size: .8rem;
    }
  
`
export const HeroicoImg = styled.img`
   
    width: 17%;
    margin-left: 0;
    padding-left: 0;
`

export const HeaderLogo = styled.header`
    display: flex;
    padding-left: 1rem;
    align-items: center;
    justify-content: center;
    width: 96%;
    height: 5rem;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    margin-left: 1.2rem ;
    img{
       
    }

`
export const LineYellow = styled.span`
    width: 10px;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: #fdac2d;
    position: fixed;
    z-index: 2;


    `
