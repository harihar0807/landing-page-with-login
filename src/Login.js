import React from 'react'
import './Login.css';
function Login( {srcchange} ) {

   const srcc="https://drive.google.com/thumbnail?id=1IxPfYrOLialrSlWShCze1tf8FsDis8pN";
 

   const handle=(event) =>{
       event.preventDefault();

   }
   
   const updateprofile = (event) =>{
               event.preventDefault();
              srcchange(srcc);
   }



    return (
        <div className="logincontainer">
            <h2>Login</h2>
            <form onSubmit={handle}>
                <div className="input">
                    <label>
                        Email:
                       <input type="email" name="email" id="email" required />
                    </label>
                    </div>
                    <div className="input">
                    <label>
                        Password:
                        <input type="password" name="password" id="password" required/>
                    </label>
                    </div>
                    <button onClick={updateprofile} ><b>Log in</b></button>

            </form>
            
        </div>
    )
}

export default Login
