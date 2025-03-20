import Heading from "../components/Heading";
import { RowVertical } from "../components/Rows";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <RowVertical>
        <Heading type="h1">Vytvor nového užívateľa</Heading>
      </RowVertical>

      <SignupForm />
    </>
  );
}

export default NewUsers;
