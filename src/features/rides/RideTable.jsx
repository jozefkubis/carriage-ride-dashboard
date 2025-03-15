import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import RideRow from "./RideRow";
import { useRides } from "./useRides";

function Div({ children }) {
  return <div className="uppercase">{children}</div>;
}

function RideTable() {
  const { isLoading, rides } = useRides();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="1fr 1.5fr 1fr 1fr 1.5fr 2fr 1.5fr">
      <Table.Header>
        <Div></Div>
        <Div>Jazda</Div>
        <Div>Cena</Div>
        <Div>Zľava</Div>
        <Div>Cena spolu</Div>
        <Div>Popis</Div>
        <Div></Div>
      </Table.Header>

      <Table.Body
        data={rides}
        render={(ride) => <RideRow key={ride.id} ride={ride} />}
      />
    </Table>
  );
}

export default RideTable;
