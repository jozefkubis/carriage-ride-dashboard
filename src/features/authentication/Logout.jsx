import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../components/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../components/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <div>
      <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle size={22} /> : <SpinnerMini />}
      </ButtonIcon>
    </div>
  );
}

export default Logout;
