import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { RowHorizontal, RowVertical } from "../components/Rows";
import RideTable from "../features/rides/RideTable";
import CreateRideForm from "../features/rides/CreateRideForm";

function Rides() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <RowHorizontal>
        <Heading type="h1">Všetky jazdy</Heading>
        <p>Filter / Sort</p>
      </RowHorizontal>

      <RowVertical>
        <RideTable />

        <Button
          size="medium"
          variant="primary"
          onClick={() => setShowForm((show) => !show)}
        >
          Pridaj novú jazdu
        </Button>
        {showForm && <CreateRideForm />}
      </RowVertical>
    </>
  );
}

export default Rides;
