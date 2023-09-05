import { NavLink } from "react-router-dom";
import SportSeeLogo from "../assets/SportSeeLogo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <img src={SportSeeLogo} alt="Logo SportSee" className="logo" />
      <NavLink className="navlink" to="/">
        Accueil
      </NavLink>
      <NavLink className="navlink" to="#">
        Profil
      </NavLink>
      <NavLink className="navlink" to="#">
        Réglage
      </NavLink>
      <NavLink className="navlink" to="#">
        Communauté
      </NavLink>
    </header>
  );
}
