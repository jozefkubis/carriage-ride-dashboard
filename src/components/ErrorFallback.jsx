import Heading from "./Heading";
import Button from "./Button";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <main className="flex h-screen items-center justify-center bg-gray-50 p-12 dark:bg-gray-700">
        <div className="max-w-4xl rounded-md border border-gray-100 bg-white p-12 text-center dark:bg-gray-800">
          <Heading type="h1" className="mb-4 text-xl font-bold">
            Niečo se pokazilo 😒
          </Heading>
          <p className="font-sono mb-8 text-gray-500 dark:text-gray-200">
            {error.message}
          </p>
          <Button size="large" onClick={resetErrorBoundary}>
            Skús znovu
          </Button>
        </div>
      </main>
    </>
  );
}
