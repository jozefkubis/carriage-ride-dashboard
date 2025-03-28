const ButtonIcon = ({ children, ...props }) => {
  return (
    <button
      className="rounded-sm border-none bg-none p-6 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
      {...props}
    >
      {/* <svg className="h-5 w-5">{children}</svg> */}
      {children}
    </button>
  );
};

export default ButtonIcon;
