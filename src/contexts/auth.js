import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState(false);
  
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    console.log("login auth", { email, password });

    const loggedUser = {
        id: "123",
        email,
    };

    localStorage.setItem('user', JSON.stringify(loggedUser));

    if (password === "1234") {
      setUser(loggedUser);
      alert("Login efetuado com sucesso!");
      navigate("/home");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };



  //   const login = async (login, password) => {
  //   const response = await createSession(login, password);
  //   console.log("Teste", response);

  //   if (response !== undefined) {
  //     const userLog = response.data[0].id;
  //     console.log("", userLog);
  //     setUser({userLog});
  //     navigate("/home");

  //     localStorage.setItem("user", JSON.stringify(userLog));
  //   }


  //   // console.log("login auth", response.data);

  //   const loggedUser = response.data.user;
  //   // const token = response.data.token;

  //   localStorage.setItem("user", JSON.stringify(loggedUser));
  //   // localStorage.setItem("token", token);

  //   // api.defaults.headers.Authorization = `Bearer${token}`;

  //   setUser(loggedUser);
  //   alert("Login efetuado com sucesso!");
  //   navigate("/home");
  // };

//   const logout = () => {
//     console.log("logout");
    
//     localStorage.removeItem("user");
//     // localStorage.removeItem("token");

//     api.defaults.headers.Authorization = null;

//     setUser(null);
//     navigate("/");
// }


  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, }}
    >
      {children}
    </AuthContext.Provider>
  );
};