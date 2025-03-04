import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../components/Heading";

const PageNotFoundDiv = ({ children }) => {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
      {children}
    </main>
  );
};

const Box = ({ children }) => {
  return (
    <div className="bg-gray-0 w-full max-w-6xl flex-none rounded-md border border-gray-100 p-12 text-center">
      {children}
    </div>
  );
};

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <PageNotFoundDiv>
      <Box>
        <Heading type="h1">Ľutujeme, ale táto stránka neexistuje. 😢</Heading>
        <button onClick={moveBack} size="large">
          &larr; Návrat
        </button>
      </Box>
    </PageNotFoundDiv>
  );
}

export default PageNotFound;
