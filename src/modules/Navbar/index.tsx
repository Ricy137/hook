import React, { useState, useEffect, type ComponentProps } from "react";
import cx from "clsx";
import { Link, useLocation } from "react-router-dom";
import AuthConBtn from "@modules/AuthConBtn";
import AnimatedLogo from "@modules/AnimatedLogo";
import Mobile from "./Mobile";
import "./index.css";

const NavLink: React.FC<ComponentProps<typeof Link> & { curPath: boolean }> = ({
  to,
  children,
  curPath,
}) => (
  <li
    className={cx(
      "navbar-link relative flex items-center px-14px h-full overflow-hidden",
      curPath && "border-b-1px border-b-solid"
    )}
  >
    <Link className="flex items-center h-full decoration-none" to={to}>
      {children}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const { pathname: curPath } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [curPath]);

  return (
    <header className="fixed left-0 top-0 flex flex-row justify-between w-full h-80px bg-[rgba(235,235,235,.45)] backdrop-blur-20px z-1000">
      <Mobile
        open={isMobileMenuOpen}
        curPath={curPath === "/" ? "plaza" : curPath}
      />
      <nav
        className={cx(
          "max-w-1920px mx-auto flex justify-between sm:justify-start items-center w-full h-80px px-32px"
        )}
      >
        <Link to="/">
          <AnimatedLogo />
        </Link>
        <ul className="navbar-linkArea display-none sm:flex h-full items-center text-16px font-semibold">
          <NavLink
            to="/plaza"
            curPath={curPath === "/" || curPath === "/plaza"}
          >
            Plaza
          </NavLink>
        </ul>
        <AuthConBtn>Test</AuthConBtn>
        <label
          className="burger-container ml-20px sm:display-none"
          htmlFor="burger-check"
        >
          <input
            className="burger-check"
            id="burger-check"
            type="checkbox"
            checked={isMobileMenuOpen}
            onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
          />
          <span className="burger" />
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
