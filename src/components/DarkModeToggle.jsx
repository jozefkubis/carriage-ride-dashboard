import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
// import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon>
      {/* {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />} */}
      <HiOutlineMoon size={22} />
    </ButtonIcon>
  );
}

export default DarkModeToggle;
