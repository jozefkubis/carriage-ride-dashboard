import Button from "../../components/Button";
import ButtonGroup from "../../components/ButtonGroup";
import ButtonText from "../../components/ButtonText";
import Heading from "../../components/Heading";
import { RowHorizontal } from "../../components/Rows";
import Tag from "../../components/Tag";
import BookingDataBox from "./BookingDataBox";

import { useState } from "react";
import ConfirmDelete from "../../components/ConfirmDelete";
import Modal from "../../components/Modal";
import Spinner from "../../components/Spinner";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import usePayInBooking from "./usePayInBooking";

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { payInBooking, isPayingIn } = usePayInBooking();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const status = booking.isPaid ? "zaplatené" : "nezaplatené";

  // Mapa pre priradenie typu tagu na základe statusu platby
  const statusToTagType = {
    true: "success",
    false: "secondary",
  };

  function handlePaying() {
    payInBooking({ bookingId: booking.id });
  }

  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <RowHorizontal className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Heading type="h1">
            Rezervácia #{booking.id} → {booking.cride.name}
          </Heading>
          <Tag type={statusToTagType[booking.isPaid]}>
            {status.replace("-", " ")}
          </Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </RowHorizontal>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button
          disabled={isDeleting}
          variant="danger"
          size="medium"
          onClick={() => setIsOpenDeleteModal(true)}
        >
          Vymazať rezerváciu #{booking.id}
        </Button>

        {!booking.isPaid && (
          <Button disabled={isPayingIn} onClick={handlePaying}>
            Zaplať rezerváciu #{booking.id}
          </Button>
        )}

        <Button variant="secondary" size="medium" onClick={moveBack}>
          Späť
        </Button>
      </ButtonGroup>

      {isOpenDeleteModal && (
        <Modal onClose={() => setIsOpenDeleteModal(false)}>
          <ConfirmDelete
            resourceName="rezerváciu"
            onConfirm={() => {
              deleteBooking(booking.id);
              setIsOpenDeleteModal(false);
            }}
            disabled={isDeleting}
            onClose={() => setIsOpenDeleteModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default BookingDetail;
