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

const LinkDiv = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className="flex items-center gap-3 p-3 text-sm font-medium text-gray-600 transition-all duration-300 hover:rounded-sm hover:bg-gray-50 hover:text-gray-800 active:rounded-sm active:bg-gray-50 active:text-gray-800 [&.active]:rounded-sm [&.active]:bg-gray-50 [&.active]:text-gray-800"
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
            <HiOutlineHome className="hover:text-brand-600 active:text-brand-600 [&.active]:text-brand-600 h-6 w-6 text-gray-400 transition-all duration-300" />
            <span>Domov</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/bookings">
            <HiMiniCalendarDays className="hover:text-brand-600 active:text-brand-600 [&.active]:text-brand-600 h-6 w-6 text-gray-400 transition-all duration-300" />
            <span>Ojednávky</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/rides">
            <LiaHorseHeadSolid className="hover:text-brand-600 active:text-brand-600 [&.active]:text-brand-600 h-6 w-6 text-gray-400 transition-all duration-300" />
            <span>Jazdy</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/users">
            <HiOutlineUsers className="hover:text-brand-600 active:text-brand-600 [&.active]:text-brand-600 h-6 w-6 text-gray-400 transition-all duration-300" />
            <span>Užívateľ</span>
          </LinkDiv>
        </li>
        <li>
          <LinkDiv to="/settings">
            <HiOutlineCog6Tooth className="hover:text-brand-600 active:text-brand-600 [&.active]:text-brand-600 h-6 w-6 text-gray-400 transition-all duration-300" />
            <span>Nastavenia</span>
          </LinkDiv>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
