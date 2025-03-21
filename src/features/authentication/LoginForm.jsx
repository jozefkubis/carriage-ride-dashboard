import { useState } from "react";
import Button from "../../components/Button";
import { Form } from "../../components/Forms";
import Input from "../../components/Input";
import FormRowVertical from "../../components/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../components/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("kubis.jozef@outlook.com");
  const [password, setPassword] = useState("netopier");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" variant="primary">
          {!isLoading ? "Prihlásiť sa" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
