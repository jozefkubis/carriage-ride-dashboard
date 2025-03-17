import BookingDataBox from "./BookingDataBox";
import { RowVertical } from "../../components/Rows";
import Heading from "../../components/Heading";
import Tag from "../../components/Tag";
import ButtonGroup from "../../components/ButtonGroup";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../components/Spinner";

function BookingDetail() {
  const { booking, isLoading } = useBooking();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const statusToTagName = {
    zaplatené: "success",
    nezaplatené: "secondary",
  };

  return (
    <>
      <RowVertical
        type="horizontal"
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <Heading as="h1">Rezervácia #{booking.id}</Heading>
          <Tag type={statusToTagName[booking.status]}>
            {booking.status.replace("-", " ")}
          </Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </RowVertical>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Späť
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
