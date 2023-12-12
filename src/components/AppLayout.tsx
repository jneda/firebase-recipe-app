// source: https://stackoverflow.com/a/76385223

import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./AppLayout.css";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div id="app">
      <Header />
      <main>{children ?? <Outlet />}</main>
      <footer>&copy; 2023 jdane.fr</footer>
    </div>
  );
}
