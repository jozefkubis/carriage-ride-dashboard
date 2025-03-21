import SortBy from "../../components/SortBy";
import Filter from "../../components/Filter";
import TableOperations from "../../components/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="isPaid"
        options={[
          { value: "true", label: "Zaplatené" },
          { value: "false", label: "Nezaplatené" },
          { value: "všetky", label: "Všetky" },
        ]}
      />

      <SortBy
        options={[
          { value: "date-asc", label: "Filtruj podľa dátumu ↑" },
          { value: "date-desc", label: "Filtruj podľa dátumu ↓" },
          {
            value: "numGuests-asc",
            label: "Filtruj podľa #hostí ↑",
          },
          {
            value: "numGuests-desc",
            label: "Filtruj podľa #hostí ↓",
          },
          {
            value: "fullName-asc",
            label: "Filtruj podľa zákazníka (A-Z)",
          },
          {
            value: "fullName-desc",
            label: "Filtruj podľa zákazníka (Z-A)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
