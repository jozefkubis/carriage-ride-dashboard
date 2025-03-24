import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import Heading from "../../components/Heading";

function DurationChart({
  bookings,
  isPaidBookings,
  isNotPaidBookings,
  numDays,
}) {
  const data = [
    {
      name: "Zaplatené rezervácie",
      value: isPaidBookings.length,
    },
    {
      name: "Nezaplatené rezervácie",
      value: isNotPaidBookings.length,
    },
  ];
  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <div className="col-span-2 rounded-md border border-gray-100 bg-white p-6">
      <Heading type="h2" className="mb-4">
        Sumár rezervácii
      </Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="40%"
            layout="vertical"
            iconSize={12}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationChart;
