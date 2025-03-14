import Heading from "../components/Heading";
import { RowHorizontal } from "../components/Rows";
import BookingTable from "../features/bookings/BookingTable";

function Bookings() {
  return (
    <>
      <RowHorizontal>
        <Heading type="h1">All bookings</Heading>
        <p>TEST</p>
      </RowHorizontal>

      <BookingTable />
    </>
  );
}

export default Bookings;
