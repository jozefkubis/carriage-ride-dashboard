import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../components/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "./TodayActivity";

export default function DashboardLayout() {
  const {
    bookings,
    numDays,
    isPaidBookings,
    isNotPaidBookings,
    isLoading: isLoadingBookings,
  } = useRecentBookings();

  if (isLoadingBookings) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 grid-rows-[auto] gap-6 py-6">
      <Stats
        bookings={bookings}
        isPaidBookings={isPaidBookings}
        isNotPaidBookings={isNotPaidBookings}
      />
      <TodayActivity />
      <DurationChart
        orders={bookings}
        isPaidBookings={isPaidBookings}
        isNotPaidBookings={isNotPaidBookings}
        numDays={numDays}
      />
      <SalesChart
        bookings={bookings}
        numDays={numDays}
        isPaidBookings={isPaidBookings}
        isNotPaidBookings={isNotPaidBookings}
      />
    </div>
  );
}
