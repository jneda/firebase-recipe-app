import { NavLink } from "react-router-dom";
import favicon from "/favicon.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={favicon} alt="Recipe Calculator logo" />
      <span>Recipe Calculator</span>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes/create">Add a recipe</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
