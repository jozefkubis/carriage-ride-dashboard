import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiMiniCalendarDays,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { LiaHorseHeadSolid } from "react-icons/lia";

const NavList = ({ children }) => {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

const LinkDiv = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 text-sm font-medium transition-all duration-300 ${isActive ? "rounded-sm bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-200"} dark:hover:text-gray-800`
      }
    >
      {children}
    </NavLink>
  );
};

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <LinkDiv to="/dashboard">
            <HiOutlineHome className="h-6 w-6" />
            <span>Domov</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/bookings">
            <HiMiniCalendarDays className="h-6 w-6" />
            <span>Objednávky</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/rides">
            <LiaHorseHeadSolid className="h-6 w-6" />
            <span>Jazdy</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/users">
            <HiOutlineUsers className="h-6 w-6" />
            <span>Užívateľ</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/settings">
            <HiOutlineCog6Tooth className="h-6 w-6" />
            <span>Nastavenia</span>
          </LinkDiv>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
