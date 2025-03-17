import Heading from "../components/Heading";
import { RowHorizontal } from "../components/Rows";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <RowHorizontal>
        <Heading type="h1">Všetky rezervácie</Heading>
        <BookingTableOperations />
      </RowHorizontal>

      <BookingTable />
    </>
  );
}

export default Bookings;
