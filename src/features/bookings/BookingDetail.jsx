import BookingDataBox from "./BookingDataBox";
import { RowHorizontal, RowVertical } from "../../components/Rows";
import Heading from "../../components/Heading";
import Tag from "../../components/Tag";
import ButtonGroup from "../../components/ButtonGroup";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../components/Spinner";
import usePayInBooking from "./usePayInBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import { useState } from "react";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { payInBooking, isPayingIn } = usePayInBooking();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  const status = booking.isPaid ? "zaplatené" : "nezaplatené";

  const statusToTagName = {
    true: "success",
    false: "secondary",
  };

  function handlePaying() {
    payInBooking({ bookingId: booking.id });
  }

  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <RowHorizontal
        type="horizontal"
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <Heading type="h1">
            Rezervácia #{booking.id} → {booking.cride.name}
          </Heading>
          <Tag type={statusToTagName[booking.isPaid]}>
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
          onClick={() => setIsOpenDeleteModal((show) => !show)}
        >
          Vymazať rezerváciu #{booking.id}
        </Button>

        {booking.isPaid === false && (
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
            onConfirm={() => deleteBooking(booking.id)}
            disabled={isDeleting}
            onClose={() => setIsOpenDeleteModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default BookingDetail;
