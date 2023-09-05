import { NavLink } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="Home">
      A quel profil souhaitait vous accéder ?
      <div className="Home-profils">
        <NavLink to="/user/12" className="Home-profil-card">
          {" "}
          <div>Karl Dovineau</div>
        </NavLink>
        <NavLink to="/user/18" className="Home-profil-card">
          {" "}
          <div>Cecilia Ratorez</div>
        </NavLink>
      </div>
    </div>
  );
}
