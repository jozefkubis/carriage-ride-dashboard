import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {darkMode ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
