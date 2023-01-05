import React, { useState } from "react";
import "../Cadastro/index.css";
import Logo2 from "../../assets/Logo2-Neki.png";
import { NavLink } from "react-router-dom";

const Cadastro = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const ocultPassword = document.getElementById("password");
  const icon = document.getElementById("icon");

  // const password2 = document.getElementById("password2");
  // const icon2 = document.getElementById("icon2");

  
  function showHide() {
    if (ocultPassword.type === "password") {
      ocultPassword.setAttribute("type", "text");
      icon.classList.add("hide");
    } else {
      ocultPassword.setAttribute("type", "password");
      icon.classList.remove("hide");
    }
  }

  // function showHide2() {
  //   if (password.type === "password") {
  //     password.setAttribute("type", "text");
  //     icon.classList.add("hide");
  //   } else {
  //     password.setAttribute("type", "password");
  //     icon.classList.remove("hide");
  //   }
  // }

  return (
    <div className="container">
      <img src={Logo2}></img>
      <div className="container-login">
        <div className="container-title">
          <h1>Cadastro</h1>
        </div>
        <form className="form">
          <div className="form-input-container">            
            <input
              id="email-user"
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="section">
              <input
                id="password"
                type="password"
                className={senha !== "" ? "has-val input" : "input"}
                placeholder="Senha" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}               
              />
              <div id="icon" onClick={showHide}></div>
            </div>
            <div className="section2">
              <input
                id="password"
                type="password"
                className={confirmaSenha !== "" ? "has-val input" : "input"}
                placeholder="Confirma Senha" 
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}               
              />
              <div id="icon" onClick={showHide}></div>
            </div>
          </div>
          <div className="form-button-config">
            <button type="submit" className="form-button">
              Cadastrar
            </button>
          </div>
          <div className="form-link-config">
            <NavLink to="/" className="form-link">
              Já tem cadastro? Faça login!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
