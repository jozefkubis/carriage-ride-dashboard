import React, { useState, useCallback } from "react";
import Button from "../../components/Button";
import { Form } from "../../components/Forms";
import Input from "../../components/Input";
import FormRowVertical from "../../components/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../components/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) return;
      login(
        { email, password },
        {
          onSuccess: () => {
            setEmail("");
            setPassword("");
          },
        },
      );
    },
    [email, password, login],
  );

  const isSubmitDisabled = isLoading || !email || !password;

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
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
        <Button size="large" variant="primary" disabled={isSubmitDisabled}>
          {!isLoading ? "Prihlásiť sa" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
