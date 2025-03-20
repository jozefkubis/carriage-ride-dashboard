import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenuDiv = ({ children }) => {
  return <ul className="flex gap-1">{children}</ul>;
};

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <HeaderMenuDiv>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser size={22} />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </HeaderMenuDiv>
  );
}

export default HeaderMenu;
