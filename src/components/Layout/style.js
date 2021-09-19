import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderLogo = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 5rem;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    z-index: 2;
    margin-left: 1.4rem ;
    img{
        position: absolute;
        left: .7rem;
        top: .7rem;
        
    }

`
export const ImgLink = styled(Link)`

  &:hover {
  
  }
`;

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


export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 2rem;
    background-color: black;
    color: gray;
    text-align: center;
    img{
        margin-bottom:2rem ;
    }
    h1{
        margin-bottom:1rem ;

    }
    p{
        font-size: 1.6rem;
    }
    div{
        font-size: 1.6rem;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        margin-top: 2rem;
        a{
            margin-left: 1rem;
            margin-bottom: 1rem;
            color: #39c0ff;
            text-align: center;
        }
    }

`