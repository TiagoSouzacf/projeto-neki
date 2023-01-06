import React, { children, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import { AuthProvider, AuthContext } from "../contexts/auth";


const Router = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Private><Home /></Private>}/>
        <Route path="*" element={<h1> Erro 404 - Página não encontrada</h1>} />
      </Routes>      
    </AuthProvider>
  );
};

export default Router;
