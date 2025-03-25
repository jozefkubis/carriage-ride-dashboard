import DashboardBox from "./DashboardBox";
import Heading from "../../components/Heading";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function SalesChart({
  bookings,
  numDays,
  isPaidBookings,
  isNotPaidBookings,
}) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => ({
    label: format(date, "MMM dd"),
    paidRides: isPaidBookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce(
        (acc, cur) => acc + (cur.cride.regularPrice - cur.cride.discount),
        0,
      ),
    notPaidRides: isNotPaidBookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce(
        (acc, cur) => acc + (cur.cride.regularPrice - cur.cride.discount),
        0,
      ),
  }));

  return (
    <DashboardBox className="col-span-full bg-white p-4">
      <Heading type="h2" className="text-lg font-semibold text-gray-800">
        Predaje
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: "#374151" }} // text-gray-800
            tickLine={{ stroke: "#374151" }}
          />
          <YAxis
            unit="€"
            tick={{ fill: "#374151" }}
            tickLine={{ stroke: "#374151" }}
          />
          <CartesianGrid
            strokeDasharray="4"
            className="stroke-gray-300 dark:stroke-gray-700"
          />
          <Tooltip contentStyle={{ backgroundColor: "#fff" }} />
          <Area
            dataKey="paidRides"
            type="monotone"
            stroke="#66e546"
            fill="#b1e9aa"
            strokeWidth={2}
            name="Zaplatené rezervácie"
            unit="€"
          />
          {/* <Area
            dataKey="notPaidRides"
            type="monotone"
            stroke="#a31616"
            fill="#e9a8a3"
            strokeWidth={2}
            name="Nezaplatené rezervácie"
            unit="€"
          /> */}
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}
