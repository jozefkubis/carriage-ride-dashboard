function ButtonText({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-sm border-none bg-transparent text-center font-medium text-indigo-600 transition duration-300 hover:text-indigo-700 active:text-indigo-700"
    >
      {children}
    </button>
  );
}

export default ButtonText;
