import { useState } from "react";

import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import { SettingsForm } from "../../components/Forms";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const { updateUser, isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  }

  return (
    <SettingsForm onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Meno a priezvysko">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button type="reset" variant="secondary" disabled={isUpdating}>
          Reset
        </Button>
        <Button disabled={isUpdating}>Aktualizovať údaje</Button>
      </FormRow>
    </SettingsForm>
  );
}

export default UpdateUserDataForm;
