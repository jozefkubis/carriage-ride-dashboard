import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { SignUpForm } from "../../components/Forms";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useSignup } from "./useSignup";
import { useCallback } from "react";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = useCallback(
    ({ fullName, email, password }) => {
      signup(
        { fullName, email, password },
        {
          onSettled: () => reset(),
        },
      );
    },
    [signup, reset],
  );

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "Toto pole je povinné" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Toto pole je povinné",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Zadajte platnú emailovú adresu",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 znakov)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Toto pole je povinné",
            minLength: {
              value: 8,
              message: "Heslo musí obsahovat najmenej 8 znakov",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Toto pole je povinné",
            validate: (value) =>
              value === getValues().password || "Heslá se neshodujú",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variant="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Reset
        </Button>
        <Button disabled={isLoading}>Pridať nového užívateľa</Button>
      </FormRow>
    </SignUpForm>
  );
}

export default SignupForm;
