import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../components/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

export default function DashboardLayout() {
  const {
    bookings,
    numDays,
    isPaidBookings,
    isNotPaidBookings,
    isLoading: isLoadingBookings,
  } = useRecentBookings();

  if (isLoadingBookings) return <Spinner />;

  return (
    <div className="alidgn-center grid max-w-[100rem] grid-cols-4 grid-rows-[auto] gap-6 py-6">
      <Stats
        bookings={bookings}
        isPaidBookings={isPaidBookings}
        isNotPaidBookings={isNotPaidBookings}
      />
      <div>Dnešné aktivity</div>
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
