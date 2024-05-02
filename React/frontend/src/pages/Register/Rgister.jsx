import { useNavigate } from "react-router-dom";
import "./register.css"
import { useState } from "react";

export default function Register() {
  const useNavigate1 = useNavigate()
  const [sex, setSex] = useState("")

  return (
    <div className="registerMainContainer">
      <div className="registerPanel">
        <h3>Register</h3>
        
        <div className="registerForm form">
          <label>Name:</label>
          <input />

          <label>Lastname:</label>
          <input/>

          <label>Age:</label>
          <input />
          

          <label>Sex:</label>
          <div>
            <label>Male</label>
            <input value="male" type="Radio" name="sex"  onChange={e => setSex(e.target.value)}/>
            <label>Female</label>
            <input value="female" type="Radio" name="sex" onChange={e => setSex(e.target.value)}/>
          </div>
      
          <label>Email:</label>
          <input />

          <label>Password:</label>
          <input />
        
        </div>
        <button>Submit</button>
        <button onClick={() => {useNavigate1("/")}}>Login</button>


      </div>
      
    </div>
  );
}









