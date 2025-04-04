import { SettingsForm } from "../../components/Forms";
import FormRow from "../../components/FormRow";
import Textarea from "../../components/Textarea";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import Spinner from "../../components/Spinner";
import Input from "../../components/Input";
import { useCallback } from "react";

function UpdateSettingsForm() {
  const { isLoading, settings: { address, email, phone } = {} } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  const handleUpdate = useCallback(
    (e, field) => {
      const { value } = e.target;
      if (!value) return;
      updateSetting({ [field]: value });
    },
    [updateSetting],
  );

  if (isLoading) return <Spinner />;

  return (
    <SettingsForm>
      <FormRow label="Email">
        <Input
          type="email"
          id="email"
          defaultValue={email}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "email")}
        />
      </FormRow>

      <FormRow label="Telefón">
        <Input
          type="tel"
          id="phone"
          defaultValue={phone}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "phone")}
        />
      </FormRow>

      <FormRow label="Adresa sídla (ulica, číslo domu, mesto, smerovacie číslo, krajina)">
        <Textarea
          id="address"
          defaultValue={address}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "address")}
        />
      </FormRow>
    </SettingsForm>
  );
}

export default UpdateSettingsForm;
