import Heading from "../components/Heading";
import { RowHorizontal } from "../components/Rows";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <div>
      <RowHorizontal type="horizontal">
        <Heading type="h1">Dashboard</Heading>
        <DashboardFilter />
      </RowHorizontal>
      <div className="mx-auto">
        <DashboardLayout />
      </div>
    </div>
  );
}

export default Dashboard;
