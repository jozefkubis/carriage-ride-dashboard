import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import RideRow from "./RideRow";
import { useRides } from "./useRides";

function RideTable() {
  const { isLoading, rides } = useRides();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="1fr 1.5fr 1fr 1fr 1.5fr 2fr 1fr">
      <Table.Header>
        <div></div>
        <div>jazda</div>
        <div>cena</div>
        <div>zľava</div>
        <div>cena spolu</div>
        <div>popis</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={rides}
        render={(ride) => <RideRow key={ride.id} ride={ride} />}
      />
    </Table>
  );
}

export default RideTable;
