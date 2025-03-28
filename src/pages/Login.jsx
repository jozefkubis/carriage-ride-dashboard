import LoginForm from "../features/authentication/LoginForm";
import Heading from "../components/Heading";
import Logo from "../components/Logo";

function LoginLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-gray-50 dark:bg-gray-700">
      {children}
    </div>
  );
}

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading type="h4">Prihláste sa do svojho účtu</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
