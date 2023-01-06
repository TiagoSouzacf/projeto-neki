// import axios from "axios";
import { useState, useContext } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "../Cadastro/index.css";
import Logo2 from "../../assets/Logo2-Neki.png";

const Cadastro = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();



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
    <div className="container-config2">
      <img src={Logo2}></img>
      <div className="container-login-config2">
        <div className="container-title">
          <h1>Cadastro</h1>
        </div>
        <form className="form-config">
          <div className="form-input-container">
            <input
              id="email-user"
              type="email"
              className="form-input2"
              placeholder="Email"
            />
            <div className="section">
              <input
                id="password"
                type="password"
                className={password !== "" ? "has-val input" : "input"}
                placeholder="Senha"
              />
              <div id="icon" onClick={showHide}></div>
            </div>
            <div className="section2">
              <input
                id="password"
                type="password"
                className={passwordConfirm !== "" ? "has-val input" : "input"}
                placeholder="Confirma Senha"
              />
              <div id="icon" onClick={showHide}></div>
            </div>
          </div>
          <div className="form-button-config">
            <button type="submit" className="form-button2"
             >
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
