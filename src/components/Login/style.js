import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FaceApp = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;
    background-color:  #fffbe2;
    color:#3b5998;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding-bottom: .5rem;
    img{
        width: 1.8rem;
        height: 3.2rem;
        margin-right: 1rem;
    }
    

`
export const Form = styled.main`
    width: 100%;
    height: 30vh;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
       width: 12.2rem;
       margin-bottom:2rem ;
    }
    input{
        width: 94%;
        height: 4.2rem;
        background-color: #f5f6f7;
        padding: 1.2rem;
        border:0;
        border-radius: 0.6rem;
        margin-bottom: 0.8rem;
    }

`
export const NavLink = styled(Link)`
  width: 94%;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
  margin-top: 1rem;
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
export const Lenguages = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 13rem;
  font-size: 1.2rem;
  line-height: 16px;
  color:#576b95;
  cursor: pointer;
  text-align: center;
  ul{
    list-style: none;
  }
`

export const Main = styled.div`
  height: 7.4rem;
font-size: 1.2rem;
  line-height: 16px;
  color:#576b95;
  text-align: center;
  p{
    margin-top:4rem;
  };
`