import Heading from "../components/Heading";
import { RowHorizontal, RowVertical } from "../components/Rows";
import AddRide from "../features/rides/AddRide";
import RideTable from "../features/rides/RideTable";

function Rides() {
  // const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <RowHorizontal>
        <Heading type="h1">Všetky jazdy</Heading>
        {/* <p>Filter / Sort</p> */}
      </RowHorizontal>

      <RowVertical>
        <RideTable />

        <AddRide />
      </RowVertical>
    </div>
  );
}

export default Rides;
