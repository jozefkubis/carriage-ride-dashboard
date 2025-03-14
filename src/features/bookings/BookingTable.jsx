import BookingRow from "./BookingRow";
import Table from "../../components/Table";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import { useBookings } from "./useBookings";

function BookingTable() {
  const { isLoading, bookings } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resource="bookings" />;

  return (
    <Table columns="1.5fr 1fr 0.5fr 1fr 2fr 1.4fr 1.4fr 1.4fr 1fr">
      <Table.Header>
        <div>Dátum</div>
        <div>Čas</div>
        <div>Hostia</div>
        {/* <div>Status</div> */}
        <div>Poznámky</div>
        <div>Meno</div>
        <div>Tel</div>
        <div>Email</div>
        <div>Jazda</div>
        <div>Cena spolu</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
    </Table>
  );
}

export default BookingTable;
