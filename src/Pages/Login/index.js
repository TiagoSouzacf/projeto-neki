import React, { useState, useContext } from "react";
import "./index.css";
import Logo2 from "../../assets/Logo2-Neki.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const Login = () => {

  const {authenticated, login} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('submit', {email, password})
    login(email, password)

    setEmail('')
    setPassword('')
  }
  // const navigate = useNavigate();

  const ocultPassword = document.getElementById("password");
  const icon = document.getElementById("icon");

  function showHide() {
    if (ocultPassword.type === "password") {
      ocultPassword.setAttribute("type", "text");
      icon.classList.add("hide");
    } else {
      ocultPassword.setAttribute("type", "password");
      icon.classList.remove("hide");
    }
  }

  return (
    <div className="container-config">
      <img src={Logo2}></img>
      <div className="container-login">
        
        <div className="container-title">
          <h1>Faça seu login</h1>          
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input-container">
            <input
              name="username"
              value={email}
              id="email-user"
              type="email"
              className="form-input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="section">
              <input
                name="senha"
                value={password}
                id="password"
                type="password"
                className="form-input-password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div id="icon" onClick={showHide}></div>
            </div>
          </div>
          <div className="form-button-config">
            <button type="submit" className="form-button">
              Login
            </button>
          </div>
          <div className="form-link-config">
            <NavLink to="/cadastro" className="form-link">
              Ainda não se cadastrou? Clique aqui!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
