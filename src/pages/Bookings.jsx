import Heading from "../components/Heading";
import { RowHorizontal } from "../components/Rows";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <div className="flex flex-col gap-8">
      <RowHorizontal>
        <Heading type="h1">Všetky rezervácie</Heading>
        <BookingTableOperations />
      </RowHorizontal>

      <BookingTable />
    </div>
  );
}

export default Bookings;
