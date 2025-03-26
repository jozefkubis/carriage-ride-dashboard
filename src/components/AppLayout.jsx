import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const AppLayoutDiv = ({ children }) => {
  return <div className="flex">{children}</div>;
};

const Main = ({ children }) => {
  return (
    <main className="h-screen w-full overflow-y-scroll bg-gray-50 px-10 pb-20 dark:bg-gray-700 dark:text-gray-200">
      {children}
    </main>
  );
};

const Container = ({ children }) => {
  return (
    <div className="mx-auto flex max-w-[80rem] flex-col gap-4">{children}</div>
  );
};

function AppLayout() {
  return (
    <AppLayoutDiv>
      <SideBar />
      <div className="flex w-full flex-col">
        <Header />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </div>
    </AppLayoutDiv>
  );
}

export default AppLayout;
