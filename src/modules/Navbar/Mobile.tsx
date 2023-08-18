import React, { type ComponentProps } from "react";
import cx from "clsx";
import { Link } from "react-router-dom";

const NavLink: React.FC<ComponentProps<typeof Link> & { curPath: string }> = ({
  to,
  children,
  curPath,
}) => (
  <li
    className={cx("relative flex items-center w-full h-48px", {
      ["nav-link-mobile--active"]: curPath?.startsWith(to as string),
    })}
  >
    <Link className="flex items-center w-full h-full decoration-none" to={to}>
      {children}
    </Link>
  </li>
);

const Mobile: React.FC<{ open: boolean; curPath: string }> = ({
  open,
  curPath,
}) => {
  return (
    <div
      className={cx(
        "nav-mobile sm:display-none absolute w-full h-[calc(100vh-80px)] left-0 top-80px bg-#ECE7D5 transition-transform duration-300 z-50 translate-y-[-100vh]",
        open && "translate-y-0px"
      )}
    >
      <ul className="pl-40px m-0px flex flex-col gap-12px text-22px font-semibold dropdown-shadow">
        <NavLink to="/plaza" curPath={curPath}>
          Plaza
        </NavLink>
      </ul>
    </div>
  );
};

export default Mobile;
