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
import { useEffect, useState } from "react";

export default function SalesChart({
  numDays,
  isPaidBookings,
  isNotPaidBookings,
}) {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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
    <DashboardBox className="col-span-full bg-white p-4 dark:bg-gray-800">
      <Heading type="h2" className="text-lg font-semibold text-gray-800">
        Predaje
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: isDark ? "#e5e7eb" : "#374151" }}
            tickLine={{ stroke: isDark ? "#e5e7eb" : "#374151" }}
          />
          <YAxis
            unit="€"
            tick={{ fill: isDark ? "#e5e7eb" : "#374151" }}
            tickLine={{ stroke: isDark ? "#e5e7eb" : "#374151" }}
          />
          <CartesianGrid
            strokeDasharray="4"
            className="stroke-gray-300 dark:stroke-gray-200"
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
