function LoginLayout({ children }) {
  return (
    <div className="gap-3.2 bg-grey-50 grid min-h-screen grid-cols-1 items-center justify-center">
      {children}
    </div>
  );
}

function Login() {
  return <LoginLayout>Login</LoginLayout>;
}

export default Login;
