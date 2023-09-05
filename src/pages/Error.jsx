import { NavLink } from "react-router-dom";
import "../styles/Error.css";

export default function Error() {
  return (
    <div className="Error">
      <h1 className="Error-title">Oops !</h1>
      <h2 className="Error-subtitle">
        Il semblerait qu'un problème est survenu lors de la récupération des
        données
      </h2>
      <NavLink to="/">
        {" "}
        <div className="Error-navlink">Retourner à la page d'accueil</div>
      </NavLink>
    </div>
  );
}
