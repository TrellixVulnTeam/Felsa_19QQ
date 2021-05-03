import React,{useState} from 'react';
import Header from '../components/Header';
import Characters from './Characters';
import ThemeContext from '../context/ThemeContext'

import '../assets/styles/global.scss'
         


function App() {
  const [darkmode, setDarkmode] = useState(false)
    return (
     
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            <Header dark={`${darkmode} ? "dark": "light"`} />
            <Characters dark={`${darkmode} ? "dark": "light"`}/>
        </ThemeContext.Provider>

      
   
       );
}

export default App
