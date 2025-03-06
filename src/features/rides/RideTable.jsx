import { useQuery } from "@tanstack/react-query";
import { getRides } from "../../services/apiRides";
import Spinner from "../../components/Spinner";
import RideRow from "./RideRow";

const Table = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      {children}
    </div>
  );
};

const TableHeader = ({ children }) => {
  return (
    <header className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr_1fr_2fr_0.5fr] items-center gap-x-6 border-b border-gray-300 bg-gray-100 p-4 font-semibold uppercase tracking-wide text-gray-600">
      {children}
    </header>
  );
};

function RideTable() {
  const {
    isLoading,
    data: rides,
    error,
  } = useQuery({
    queryKey: ["ride"],
    queryFn: getRides,
  });

  if (isLoading) return <Spinner />;

  return (
    <Table>
      <TableHeader>
        <div></div>
        <div>jazda</div>
        <div>cena</div>
        <div>zľava</div>
        <div>cena spolu</div>
        <div>popis</div>
        <div></div>
      </TableHeader>
      {rides.map((ride) => (
        <RideRow key={ride.id} ride={ride} />
      ))}
    </Table>
  );
}

export default RideTable;
