const LogoDiv = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-xl font-bold italic text-gray-500 dark:text-gray-200">
      {children}
    </div>
  );
};

const Img = (props) => {
  return <img className="h-24 w-auto rounded-xl" {...props} />;
};

function Logo() {
  return (
    <LogoDiv>
      <Img src="/public/logo.png" alt="Logo" />
      <h1>Carriage Ride</h1>
    </LogoDiv>
  );
}

export default Logo;
