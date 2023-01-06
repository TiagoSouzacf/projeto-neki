import React, { useState, useContext, useEffect } from "react";
import "./index.css";
import Logo2 from "../../assets/Logo2-Neki.png";
import { useNavigate,NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
// import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  // const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    if (recoverdUser) {
      navigate("/home");
    }
  }, []);

  // function logar(e) {
  //   e.preventDefault();
  //   axios
  //     .get
  //     (`http://107.178.219.190:8080/api/users?login=${login}%password=${password}`)
  //     console.log('teste')

  //     .then((response) => {
  //       console.log('teste3')

  //       if (response.data.autenticated) {
  //         login(login,password);
  //         alert('Usuario não existe')
  //       }
  //     })
  //     .catch((error) => {        
  //       console.log('Teste2');
  //       alert('usuario não encontrado')
  //     });
  // }



  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('submit', {email, password})
    login(email, password)

    setEmail('')
    setPassword('')
  }

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
    <div className="container-login">
      <img src={Logo2}></img>
      <div className="container-login-config">        
        <div className="container-title">
          <h1>Faça seu login</h1>          
        </div>
        <form className="form-config" 
        onSubmit={handleSubmit}
        >
          <div className="form-input-container">
            <input
              name="username"
              value={email}
              id="email-user"
              type="email"
              className="form-input-config"
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
            <button type="submit" className="form-button-bt"
            // onClick={(e) => {
            //   logar(e);
            // }}
            >
              Login
            </button>
          </div>
          <div className="form-link-config">
            <NavLink to="/cadastro" className="form-link-lk">
              Ainda não se cadastrou? Clique aqui!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
