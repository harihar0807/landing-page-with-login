import React,{useState} from 'react'
import './App.css';
import Dropdown from './Dropdown'
import Login from './Login'








function App() {

   const [dropwonactive, setDropdownactive]= useState(0);
   const [loginactive, setLoginactive]=useState(0);
   const [srcimg, setSrcimg]= useState('https://drive.google.com/thumbnail?id=1xkAoQybyQUtwaTbvUwvHs4dCz1pgrOem');
   
   const toggledropdown = () => {
         
           setDropdownactive(1-dropwonactive);
           setLoginactive(0);
         
   }

   const togglelogin = (num) => {
          setDropdownactive(1-dropwonactive);
          setLoginactive(num);
   }

   const srcchange = (srccimg ) =>{
          setSrcimg(srccimg);
          setDropdownactive(0);
          setLoginactive(0);
   }  


if(dropwonactive==1){
  return (
    <div className="container">
         <div>
           <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SkW8XHh7_0NGdI9AZ4uC8i6NTfCfwWnVlWY58f0dDDysofyRL58Xbjtiu2BuyixUYVU&usqp=CAU"
            />
            
            <span className="button">Join as a Tutor</span>
            
            
                 <img
                   className="profile"
                  src={srcimg}
                  onClick={toggledropdown}
                 />
                
        </div>
             <div>
                <Dropdown togglelogin={togglelogin} loginactive={loginactive}/>
            </div>  
           
    </div>
  
  )
  }

else if(loginactive==1){
  return (
    <div className="container">
         <div>
           <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SkW8XHh7_0NGdI9AZ4uC8i6NTfCfwWnVlWY58f0dDDysofyRL58Xbjtiu2BuyixUYVU&usqp=CAU"
            />
            
            <span className="button">Join as a Tutor</span>
            
              <img
                  className="profile"
                 src={srcimg}
                 onClick={toggledropdown}
              />
              </div>
              <div>
             <Login  srcchange={srcchange} />
             </div>
           
    </div>
  
  )
}

 else{
  return (
    <div className="container">
         <div>
           <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SkW8XHh7_0NGdI9AZ4uC8i6NTfCfwWnVlWY58f0dDDysofyRL58Xbjtiu2BuyixUYVU&usqp=CAU"
            />
            
            <span className="button">Join as a Tutor</span>
            
              <img
                  className="profile"
                 src={srcimg}
                 onClick={toggledropdown}
              />
              </div>
             
           
    </div>
  
  )
  }
 




}

export default App
