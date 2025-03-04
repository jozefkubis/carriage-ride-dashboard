import Heading from "../components/Heading";
import { RowVertical } from "../components/Rows";

function Account() {
  return (
    <>
      <Heading type="h1">Update your account</Heading>

      <RowVertical>
        <Heading type="h3">Update user data</Heading>
        <p>Update user data form</p>
      </RowVertical>

      <RowVertical>
        <Heading type="h3">Update password</Heading>
        <p>Update user password form</p>
      </RowVertical>
    </>
  );
}

export default Account;
