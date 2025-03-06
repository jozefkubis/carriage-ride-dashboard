import Heading from "../components/Heading";
import { RowHorizontal, RowVertical } from "../components/Rows";
import RideTable from "../features/rides/RideTable";

function Rides() {
  return (
    <>
      <RowHorizontal>
        <Heading type="h1">Všetky jazdy</Heading>
        <p>Filter / Sort</p>
      </RowHorizontal>

      <RowVertical>
        <RideTable />
      </RowVertical>
    </>
  );
}

export default Rides;
