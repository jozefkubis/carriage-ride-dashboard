import SortBy from "../../components/SortBy";
import Filter from "../../components/Filter";
import TableOperations from "../../components/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter />

      <SortBy
        options={[
          { value: "date-asc", label: "Filtruj podľa dátumu (od najnižšej)" },
          { value: "date-desc", label: "Filtruj podľa dátumu (od najvyššej)" },
          {
            value: "numGuests-asc",
            label: "Filtruj podľa #hostí (od najnižšej)",
          },
          {
            value: "numGuests-desc",
            label: "Filtruj podľa #hostí (od najvyššej)",
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
