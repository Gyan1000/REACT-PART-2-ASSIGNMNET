import './App.css';
import {useState} from "react"
import logo_image from "./assets/instagram.png"

function App() {
  const[show,setShow]=useState(true)
 const  reverse=()=>
  {
   setShow(!show)
  }
  return (
    <div id="container">
     <div id="display">
      <img src={logo_image} alt=""/>
       <input  hidden={show} type="text" placeholder=" Full Name"/>
       <input type="email" placeholder="Your Email"/>
       <input type="password" placeholder=" Password"/>
       <input hidden={show} type="text" placeholder="Mobile Number"/>
       <button>{show?'Sign in':'Sign up'}</button>
       <div id="footer">
         {show?'create an account  ':'do you have an account?  '}<p onClick={reverse}>{show?'Sign up':'Sign in'}</p>
       </div>
     </div>
    </div> 
  );
}

export default App;
