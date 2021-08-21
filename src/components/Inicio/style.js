import styled from 'styled-components';
import fondo from '../../assets/images/home.jpeg'
import { Link } from 'react-router-dom';


export const MainLog= styled.main`
    width: 100%;
    height: 100vh;
`
export const Fondo = styled.div`
        width: 100%;
        background-image: url(${fondo});
        height: 100%;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img{
            width: 100%;
        }

`
export const Logo = styled.img`
    width: 100%;
    
`
export const NavLink = styled(Link)`
  width: 90%;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
  background-color: #1877f2;
  color: white;
  font-size: 1.7rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.4rem;
  color: #fff;
  &:hover {
    color: red;
    background: blue;
  }
`;