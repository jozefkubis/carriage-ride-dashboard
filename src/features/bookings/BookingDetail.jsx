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
import useCheckInBooking from "./useCheckInBooking";
import { is } from "date-fns/locale";

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkInBooking, isCheckingIn } = useCheckInBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  const status = booking.isPaid ? "zaplatené" : "nezaplatené";

  const statusToTagName = {
    true: "success",
    false: "secondary",
  };

  function handleCheckin() {
    checkInBooking({ bookingId: booking.id });
  }

  return (
    <>
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
        {booking.isPaid === false && (
          <Button disabled={isCheckingIn} onClick={handleCheckin}>
            Check in
          </Button>
        )}

        <Button variant="secondary" size="medium" onClick={moveBack}>
          Späť
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
