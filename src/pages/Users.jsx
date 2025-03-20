import Heading from "../components/Heading";
import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading type="h1">Vytvor nového užívateľa</Heading>
      <SignupForm />;
    </>
  );
}

export default NewUsers;
