import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  // Načítať darkMode zo storage alebo použiť predvolené nastavenie
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {darkMode ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
