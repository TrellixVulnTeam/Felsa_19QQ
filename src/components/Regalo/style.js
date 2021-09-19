import styled from 'styled-components';
import { css } from 'styled-components';
import fondo from '../../assets/images/home.jpeg'
import RuletaImg from '../../assets/images/regalo/ruleta.png'

export const Porfa = styled.div`

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 100vh;
   div{
     margin-top: 4rem;
      font-size: 4rem;
   }
 
`
export const Fondo = styled.div`
        width: auto;
        background-image: url(${fondo});
        height: 100vh;
        background-repeat: no-repeat;
        display: flex;
        color: white;
        flex-direction: column;
        z-index: 1;
      a{
         outline: none;
         color: white;
         
      }

`
export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    background-color: #09071e;
    width: 70%;
    height: 15%;
    border-radius: 1rem;
    margin: 0 auto;
    margin-top: 3.5rem;
    margin-bottom: 3rem;
`


export const CajaFirst = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 254px;
   width: 32rem;
   background-image: url(${RuletaImg});
   background-repeat: no-repeat;
   background-size: 100% 254px ;
   background-size: contain;
   `
   export const Caja = styled.div`
   border: 4px solid white;
   width: 18%;
   height: 26%;
   margin-top:1rem;

   margin-left: 1rem;
   z-index: 3;
 ${props => props.ruleta === false  && css `
    -webkit-transform: matrix3d(0.99702, 0, 0, 0, 0, 0.99702, 0, 0, 0, 0, 1, 0,238.40514, 0, 0, 1);
    
 `}
 ${props => props.modal  === true  && css `
    -webkit-transform:none;
    margin-left: 0rem;
 ` }

`
export const Caja2 = styled.div`
border: 4px solid white;
z-index: 3;

width: 18%;
height: 25%;
margin-left: 1rem;
margin-top: 9rem;

${props => props.ruleta  === false  && css `
    -webkit-transform: matrix3d(0.99702, 0, 0, 0, 0, 0.99702, 0, 0, 0, 0, 1, 0,243.40514, 0, 0, 1);
    margin-left: 0rem;
 ` }
 ${props => props.modal  === true && css `
    -webkit-transform:none;
    margin-left: 0rem;
 ` }
`


export const BotonRul = styled.button`
    /* border: none;
    background-color: green;
    z-index: 4;
    width: 30%;
    border-radius: 0.5rem;
    height: 10%;
    margin: 0 auto;
    color: white;
    font-size: 1.6rem;
    font-weight: bold; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 12.5rem;
    margin: 0 auto;
    width: 30%;
    height: 3rem;
    line-height: 4rem;
    margin-top: 1rem;
    font-size: 1.7rem;
    background-color: #1877f2;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    border: none;
    border-radius: 0.4rem;
    color: #fff;
  &:hover {
    background: #7618f2;
  }
  
`

export const Contacto  = styled.div`
   display: flex;
   align-items: center;
   margin: 0 auto;
   border: 1px solid white;
   background-color: #01e675;
   width: 93%;
   border-radius: 0.5rem;
   margin-bottom: 1rem;

   img{
      width: 13%;
      margin-left: 2rem;
   }
   p{
      margin-left: 2rem;
      font-size: 1.5rem;
      color: black;
      outline: white;
   }

`
export const Form = styled.form`
width: 100%;
height: 30vh;
font-size: 1.5rem;
display: flex;
align-items: center;
flex-direction: column;

input{
    width: 94%;
    height: 4.2rem;
    background-color:  #fdac2d   ;
    padding: 1.2rem;
    border:0;
    border-radius: 0.6rem;
    margin-bottom: 0.8rem;
    &::placeholder{
      color: black;
   }
}

`
export const Codigo = styled.div`

height: 20%;
display: flex;
flex-direction: column;
`

//modal

export const Modal = styled.div`
  display: none;
  ${props => props.modal  === true  && css `
      display: flex;
 ` }
 ${props => props.close  === true && css `
      display: none;
 ` }
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0%;
  z-index: 4;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #252525a3;
  h1{
     padding-top: 5rem;
     color: #F1B701;
  }
  img{
     padding-top: 40%;
     width: 45%;
  }
  button{
     background-color: #F1B701;
     margin-top: 35%;
     width: 30%;
     height: 5%;
     color: black ;
     border: none;
     font-weight: bold;
     box-shadow: 9px 4px 20px 2px #000000;
  }
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