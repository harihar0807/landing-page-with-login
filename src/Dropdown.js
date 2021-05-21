import React,{useState} from 'react'
import './Dropdown.css';
function Dropdown({togglelogin,loginactive}) {
      
   
   


    return (
        <div className="popup">
            <p 
              onClick={()=>togglelogin(1-loginactive)}
            >Log in</p>
                
            <p>Sign up</p>
                
           <p> How online tutoring works</p>
               
           <p>  Help center</p>
              
           
        </div>
    )
}

export default Dropdown
