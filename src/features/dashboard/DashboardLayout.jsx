import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../components/Spinner";
import Stats from "./Stats";

export default function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();

  if (isLoadingBookings) return <Spinner />;

  return (
    <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-6 py-6">
      <Stats bookings={bookings} />
      <div>Dnešné aktivity</div>
      <div>Prehľad rezervácií</div>
      <div>Zaplatené rezervácie</div>
    </div>
  );
}
