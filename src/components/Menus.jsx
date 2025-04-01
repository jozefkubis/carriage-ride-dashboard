import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-2 rounded-sm border-none bg-transparent p-1 transition duration-200 hover:bg-gray-100"
    >
      <HiMiniEllipsisVertical className="h-6 w-6 text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position } = useContext(MenusContext);
  // const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      // ref={ref}
      className="fixed z-50 rounded-md bg-white shadow-md"
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full items-center gap-4 border-none bg-transparent px-6 py-3 text-left text-[1.4rem] transition duration-200 hover:bg-gray-100"
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = ({ children }) => (
  <div className="flex items-center justify-end">{children}</div>
);
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
