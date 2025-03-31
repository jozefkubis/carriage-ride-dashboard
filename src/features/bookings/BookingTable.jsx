import BookingRow from "./BookingRow";
import Table from "../../components/Table";
import Empty from "../../components/Empty";
import Spinner from "../../components/Spinner";
import { useBookings } from "./useBookings";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";

// Komponent pre hlavičku tabuľky – jasnejšie pomenovanie než len "Div"
const HeaderCell = ({ children }) => {
  return <div className="uppercase">{children}</div>;
};

function BookingTable() {
  const { isLoading, bookings, count } = useBookings();
  const [searchParams] = useSearchParams();

  // Ak prebieha načítanie, zobrazíme spinner
  if (isLoading) return <Spinner />;

  // Ak nie sú žiadne bookings, zobrazíme prázdny stav
  if (!bookings || bookings.length === 0) return <Empty resource="bookings" />;

  // FILTER – filtrujeme bookings podľa query parametra "isPaid"
  const filterValue = searchParams.get("isPaid");
  let filteredBookings = bookings;
  if (filterValue === "true") {
    filteredBookings = bookings.filter((booking) => booking.isPaid === true);
  } else if (filterValue === "false") {
    filteredBookings = bookings.filter((booking) => booking.isPaid === false);
  }

  // SORTBY – Získame kritérium triedenia z query parametra "sortBy"
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  // Triedenie – ak sú hodnoty typu string používa sa localeCompare
  const sortedBookings = filteredBookings.sort((a, b) => {
    if (typeof a[field] === "string" && typeof b[field] === "string") {
      return a[field].localeCompare(b[field]) * modifier;
    } else {
      return (a[field] - b[field]) * modifier;
    }
  });

  return (
    <Table columns="0.8fr 0.5fr 0.7fr 1.1fr 1.1fr 0.5fr 0.8fr 0.2fr">
      <Table.Header>
        <HeaderCell>Dátum</HeaderCell>
        <HeaderCell>Čas</HeaderCell>
        <HeaderCell>Hostia</HeaderCell>
        <HeaderCell>Meno</HeaderCell>
        <HeaderCell>Jazda</HeaderCell>
        <HeaderCell>€€€</HeaderCell>
        <HeaderCell>Status</HeaderCell>
        <HeaderCell></HeaderCell>
      </Table.Header>

      <Table.Body
        data={sortedBookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />

      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
