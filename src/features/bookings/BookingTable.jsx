import BookingRow from "./BookingRow";
import Table from "../../components/Table";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import { useBookings } from "./useBookings";
import { useSearchParams } from "react-router-dom";

function Div({ children }) {
  return <div className="uppercase">{children}</div>;
}

function BookingTable() {
  const { isLoading, bookings } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resource="bookings" />;

  // FILTER
  const filterValue = searchParams.get("status") || "všetky";

  let filteredBookings;
  if (filterValue === "všetky") filteredBookings = bookings;
  if (filterValue === "zaplatené")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "zaplatené",
    );
  if (filterValue === "nezaplatené")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "nezaplatené",
    );

  // SORTBY
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedBookings = filteredBookings.sort((a, b) => {
    if (typeof a[field] === "string" && typeof b[field] === "string") {
      return a[field].localeCompare(b[field]) * modifier;
    } else {
      return (a[field] - b[field]) * modifier;
    }
  });

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
        data={sortedBookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
    </Table>
  );
}

export default BookingTable;
