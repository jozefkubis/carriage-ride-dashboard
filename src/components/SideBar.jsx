import Logo from "./Logo";
import MainNav from "./MainNav";

const SideBarDiv = ({ children }) => {
  return (
    <aside className="bg-gray-0 flex flex-col gap-8 border-r border-gray-100 p-8">
      {children}
    </aside>
  );
};

function SideBar() {
  return (
    <SideBarDiv>
      <Logo />
      <MainNav />
    </SideBarDiv>
  );
}

export default SideBar;
