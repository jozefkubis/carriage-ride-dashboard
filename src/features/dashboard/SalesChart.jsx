import DashboardBox from "./DashboardBox";
import Heading from "../../components/Heading";

const isDarkMode = true;

const colors = !isDarkMode
  ? {
      totalSales: { stroke: "stroke-indigo-600", fill: "fill-indigo-600" },
      extrasSales: { stroke: "stroke-green-500", fill: "fill-green-500" },
      text: "text-gray-200",
      background: "bg-gray-900",
    }
  : {
      totalSales: { stroke: "stroke-indigo-600", fill: "fill-indigo-200" },
      extrasSales: { stroke: "stroke-green-600", fill: "fill-green-200" },
      text: "text-gray-800",
      background: "bg-white",
    };

export default function SalesChart() {
  return (
    <DashboardBox className={`col-span-full p-4 ${colors.background}`}>
      <Heading type="h2" className={`text-lg font-semibold ${colors.text}`}>
        Predaje
      </Heading>
      {/* Sem pôjde graf, napr. pomocou Recharts */}
    </DashboardBox>
  );
}
