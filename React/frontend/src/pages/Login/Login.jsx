import { useNavigate } from "react-router-dom"
import "./login.css"
import { useRef } from "react"
import userRequests from "../../api/userRequests"

export default function Login() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100svh"
  }

  const handleLogin = async () => {
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    const response = await userRequests.login(data)
    console.log(response)
    alert(response)
  }

  return (
    <div style={pageStyle}>
      <div className="loginContainer">
        <div className="loginPanel">
            <h2>Login</h2>
            <div className="loginForm">
                <label htmlFor="">Email:</label>
                <input ref={emailRef}/>
                <label htmlFor="">Password:</label>
                <input ref={passwordRef} />
            </div>
            <button onClick={handleLogin}>Submit</button>
            <button onClick={() => {navigate("/register")}}>Register</button>
        </div> 
    </div>
    </div>
    )
}
