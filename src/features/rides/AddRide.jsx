import { useState } from "react";
import CreateRideForm from "./CreateRideForm";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function AddRide() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button
        size="large"
        variant="primary"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Pridaj novú jazdu
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateRideForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
