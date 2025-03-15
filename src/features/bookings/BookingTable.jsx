import BookingRow from "./BookingRow";
import Table from "../../components/Table";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import { useBookings } from "./useBookings";

function Div({ children }) {
  return <div className="uppercase">{children}</div>;
}

function BookingTable() {
  const { isLoading, bookings } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resource="bookings" />;

  return (
    <Table columns="0.8fr 0.5fr 0.7fr 1.1fr 1.1fr 0.5fr 0.8fr">
      <Table.Header>
        <Div>Dátum</Div>
        <Div>Čas</Div>
        <Div>Hostia</Div>
        {/* <Div>Status</Div> */}
        {/* <Div>Poznámky</Div> */}
        <Div>Meno</Div>
        {/* <Div>Tel</Div>
        <Div>Email</Div> */}
        <Div>Jazda</Div>
        <Div>€€€</Div>
        <Div>Status</Div>
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
    </Table>
  );
}

export default BookingTable;
