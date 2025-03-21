import Heading from "../components/Heading";
import { RowVertical } from "../components/Rows";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";

function Account() {
  return (
    <>
      <RowVertical>
        <Heading type="h1">Aktualizácia účtu</Heading>
      </RowVertical>

      <RowVertical>
        <Heading type="h3">Aktualizácia údajov</Heading>
      </RowVertical>
      <UpdateUserDataForm />

      <RowVertical>
        <Heading type="h3">Aktualizácia hesla</Heading>
      </RowVertical>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
