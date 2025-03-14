import BookingRow from "./BookingRow";
import Table from "../../components/Table";

function BookingTable() {
  const bookings = [];

  return (
    // <Menus>
    <Table columns="1.4fr 1fr 1fr 2.4fr 1.4fr 1.4fr 1.4fr 3.2rem">
      <Table.Header>
        <div>Dátum</div>
        <div>Hostia</div>
        <div>Status</div>
        <div>Poznámky</div>
        <div>Meno</div>
        <div>Tel</div>
        <div>Email</div>
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
