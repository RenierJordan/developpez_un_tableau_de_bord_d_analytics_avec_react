import React from "react";
import { NavLink } from "react-router-dom";
import Icon1 from "../assets/menu_icon_1.svg";
import Icon2 from "../assets/menu_icon_2.svg";
import Icon3 from "../assets/menu_icon_3.svg";
import Icon4 from "../assets/menu_icon_4.svg";
import "../styles/VerticalNav.css";

export default function VerticalNav() {
  return (
    <div className="vertical-nav">
      <NavLink to="#">
        <img src={Icon1} className="vnav-icon" alt="Lien Méditation" />
      </NavLink>
      <NavLink to="#">
        <img src={Icon2} className="vnav-icon" alt="Lien Natation" />
      </NavLink>
      <NavLink to="#">
        <img src={Icon3} className="vnav-icon" alt="Lien Cyclisme" />
      </NavLink>
      <NavLink to="#">
        <img src={Icon4} className="vnav-icon" alt="Lien Musculation" />
      </NavLink>
      <div className="copyright">Copyright, Sportsee 2020</div>
    </div>
  );
}
