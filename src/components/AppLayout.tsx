import { NavLink, Outlet } from "react-router-dom";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <header>
        <span>Hello!</span>
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
      {children ?? <Outlet />}
      <footer>&copy; 2023 jdane.fr</footer>
    </>
  );
}
