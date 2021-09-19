import React,{ useState , useRef} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {Porfa,  Fondo , Info,BotonRul ,CajaFirst, Caja, Caja2,Contacto, Form, Codigo,Modal} from './style'
import HeaderRegalo from '../Layout/HeaderRegalo';


//imagenes
import Perdiste from '../../assets/images/regalo/perdiste.png'
import Whatsapp from '../../assets/images/regalo/whatsapp.svg'


const Regalo = () => {
    const clave = useSelector(state => state.usuarios)
    const inputEL = useRef(0)
    const [email , setEmail]  = useState(clave.email)
    const [info , setInfo] = useState(clave.password)
    const [b64 , setB64] = useState(false)
    const [code , setCode] = useState("")
    
    const [animation, setAnimation] = useState(false)
    const [modal, setModal] = useState(false)
    const [close, setClose] = useState(false)
    
    
        const handleChange = e => {
                console.log(code.code);
               setCode({
                ...code,
                [e.target.name] : e.target.value   
               })
        };
    
    const handelClick = () =>{
        inputEL.current.focus()
        if(code.code === 'hola'){
            alert("ganaste care minda")
        }
        else if(!modal  && !animation && !close){
        setTimeout(() => {
            setAnimation(true)
            setInterval(() => {
                setTimeout(() => {
                    setAnimation(false)
                    clearTimeout()
                        setTimeout(()=>{
                            setAnimation(true)
                            setTimeout(()=>{
                                setModal(true);
                                
                            }, 3000)
                        },1200)
                }, 1200);
        
            }, 1000);  
        }, 1000);
        setB64(()=> window.btoa(info))
        } 
        else if(modal  && animation){
                setModal(false)
                setClose(true)
                clearTimeout()
        }
  
    }
    if (!info){
        return(
            <div>
                <Porfa>
                    <h1>inicia Sesion Primero</h1>
                    <div>
                        <Link to="/login"> Logear</Link>

                    </div>
                </Porfa>
            </div>
        )
    }
    
    if(info){
        return (
            <>
            <Fondo modal={modal}>
                <HeaderRegalo user={email}></HeaderRegalo>
                <Info>

                    { b64 ? <h2>Codigo:  {b64}</h2>: <h1>Da  Click al boton regalo</h1> } 

                </Info>
                <CajaFirst>
                    <Caja ruleta={animation} modal={modal} ></Caja>
                    <Caja2 ruleta={animation} modal={modal}></Caja2>
                    <BotonRul type="button" onClick={handelClick}>Regalo</BotonRul>

                </CajaFirst>
                <Codigo>
                    <Form>
                        <input ref={inputEL} type="text" name="code"  placeholder="Introduce el codigo comprado o de un amigo" onChange={handleChange} />
                    </Form>
                    <a href="https://wa.me/573193893478?text=Hola%20ananin">
                        <Contacto>
                            <img src={Whatsapp} alt="logo de whatsapp" />
                            <p>Contacto de  codigo</p>
                        </Contacto>
                    </a>
                </Codigo>
                <Modal modal={modal} close={close}>
                    <h1>Perdiste</h1>
                    <img src={Perdiste}  />
                    <button onClick={()=>{setClose(true)}}>Ok</button>
                </Modal>
            </Fondo>
            </>
        )
    }
   
}

export default Regalo

