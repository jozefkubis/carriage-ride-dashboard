import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const HeaderDiv = ({ children }) => {
  return (
    <header className="bg-gray-0 flex items-center justify-end gap-6 border-b border-gray-100 p-3 dark:bg-gray-700 dark:text-gray-200">
      {children}
    </header>
  );
};

function Header() {
  return (
    <HeaderDiv>
      <UserAvatar />
      <HeaderMenu />
    </HeaderDiv>
  );
}

export default Header;
