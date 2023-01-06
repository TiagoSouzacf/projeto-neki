import React, { useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { AiOutlineLogout } from "react-icons/ai";

import "../../components/navbar/index.css";
import Logo2 from "../../assets/Logo2-Neki.png";

export const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="navbar-header">
      <div className="container-navbar">
        <div className="container-navbar-img">
          <img className="logo" src={Logo2} alt="Logo Neki" />
        </div>   
         
        <ul className="container-navbar-list">
          <li className="container-navbar-item">            
          </li>
          <li className="container-navbar-item">
            <AiOutlineLogout className="container-icone" onClick={handleLogout}>
              Sair
            </AiOutlineLogout>
          </li>
        </ul>
      </div>
    </nav>
  );
};
