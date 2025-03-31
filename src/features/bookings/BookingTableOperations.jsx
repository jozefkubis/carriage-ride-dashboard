import SortBy from "../../components/SortBy";
import Filter from "../../components/Filter";
import TableOperations from "../../components/TableOperations";

// Možnosti filtra pre stav platby
const filterOptions = [
  { value: "true", label: "Zaplatené" },
  { value: "false", label: "Nezaplatené" },
  { value: "všetky", label: "Všetky" },
];

// Možnosti triedenia
const sortOptions = [
  { value: "date-asc", label: "Filtruj podľa dátumu ↑" },
  { value: "date-desc", label: "Filtruj podľa dátumu ↓" },
  { value: "numGuests-asc", label: "Filtruj podľa #hostí ↑" },
  { value: "numGuests-desc", label: "Filtruj podľa #hostí ↓" },
  { value: "fullName-asc", label: "Filtruj podľa zákazníka (A-Z)" },
  { value: "fullName-desc", label: "Filtruj podľa zákazníka (Z-A)" },
];

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="isPaid" options={filterOptions} />
      <SortBy options={sortOptions} />
    </TableOperations>
  );
}

export default BookingTableOperations;
