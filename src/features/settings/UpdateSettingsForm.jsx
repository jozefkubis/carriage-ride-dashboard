import { Form } from "../../components/Forms";
import FormRow from "../../components/FormRow";
import Textarea from "../../components/Textarea";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
import Spinner from "../../components/Spinner";
import Input from "../../components/Input";

function UpdateSettingsForm() {
  const { isLoading, settings: { address, email, phone } = {} } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
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
          defaultValue={`+421 ${phone}`}
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
    </Form>
  );
}

export default UpdateSettingsForm;
