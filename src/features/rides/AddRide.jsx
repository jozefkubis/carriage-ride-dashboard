import { useState } from "react";
import CreateRideForm from "./CreateRideForm";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

export default function AddRide() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <div>
      <Button
        size="large"
        variant="primary"
        onClick={() => setIsOpenModal((prev) => !prev)}
      >
        Pridaj novú jazdu
      </Button>
      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          <CreateRideForm onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
}
