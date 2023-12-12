// source: https://stackoverflow.com/a/76385223

import { NavLink, Outlet } from "react-router-dom";
import favicon from "/favicon.svg";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          height: "2rem",
        }}
      >
        <img
          src={favicon}
          alt="Recipe Calculator logo"
          style={{ height: "2rem" }}
        />
        <span>Recipe Calculator</span>
        <nav>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recipes/create">Add a recipe</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {children ?? <Outlet />}
      <footer>&copy; 2023 jdane.fr</footer>
    </>
  );
}
