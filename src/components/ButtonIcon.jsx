const ButtonIcon = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-sm border-none bg-none p-8 transition-all duration-200 hover:bg-gray-100"
    >
      <svg className="h-5 w-5">{children}</svg>
    </button>
  );
};

export default ButtonIcon;
