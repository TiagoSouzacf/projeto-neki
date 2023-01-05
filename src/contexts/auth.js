import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("login auth", { email, password });

    const loggedUser = {
        id: "123",
        email,
    };

    localStorage.setItem('user', JSON.stringify(loggedUser));
    

    if (password === "1234") {
      setUser(loggedUser);
      alert("Login efetuado com sucesso!")
      navigate("/home");
    }
    else{
        alert("Usuário ou senha inválidos!")
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
