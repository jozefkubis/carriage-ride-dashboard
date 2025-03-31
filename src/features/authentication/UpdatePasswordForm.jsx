import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { SettingsForm } from "../../components/Forms";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();

  const onSubmit = useCallback(
    ({ password }) => {
      updateUser(
        { password },
        {
          onSuccess: () => reset(),
        },
      );
    },
    [updateUser, reset],
  );

  return (
    <SettingsForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "Toto pole je povinné",
            minLength: {
              value: 8,
              message: "Minimum 8 znakov",
            },
          })}
        />
      </FormRow>

      <FormRow label="Potvrdte heslo" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "Toto pole je povinné",
            validate: (value) =>
              getValues().password === value || "Heslá se neshodujú",
          })}
        />
      </FormRow>

      <FormRow>
        <Button onClick={reset} type="reset" variant="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </SettingsForm>
  );
}

export default UpdatePasswordForm;
