import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import RideRow from "./RideRow";
import { useRides } from "./useRides";

const HeaderCell = ({ children }) => {
  return <div className="uppercase">{children}</div>;
};

function RideTable() {
  const { isLoading, rides } = useRides();

  // Ak prebieha načítanie, zobrazíme spinner
  if (isLoading) return <Spinner />;

  // Voliteľná správa, ak nie sú k dispozícii žiadne jazdy
  if (rides.length === 0) {
    return (
      <div className="text-center text-gray-500">Žiadne jazdy nenájdené</div>
    );
  }

  return (
    <Table columns="1fr 1.5fr 1fr 1fr 1.5fr 2fr 1.5fr">
      <Table.Header>
        <HeaderCell></HeaderCell>
        <HeaderCell>Jazda</HeaderCell>
        <HeaderCell>Cena</HeaderCell>
        <HeaderCell>Zľava</HeaderCell>
        <HeaderCell>Cena spolu</HeaderCell>
        <HeaderCell>Popis</HeaderCell>
        <HeaderCell></HeaderCell>
      </Table.Header>

      <Table.Body
        data={rides}
        render={(ride) => <RideRow key={ride.id} ride={ride} />}
      />
    </Table>
  );
}

export default RideTable;
