import Heading from "../components/Heading";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { RowVertical } from "../components/Rows";

function Settings() {
  return (
    <RowVertical>
      <Heading type="h1">Aktualizuj nastavenia</Heading>
      <UpdateSettingsForm />
    </RowVertical>
  );
}

export default Settings;
