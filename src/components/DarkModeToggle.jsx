import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  const getInitialDarkMode = () => {
    if (typeof window !== "undefined") {
      // Ak je vo localStorage hodnota, použijeme ju; inak preferujeme system preferenciu.
      const localValue = localStorage.getItem("darkMode");
      if (localValue !== null) {
        return localValue === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

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
