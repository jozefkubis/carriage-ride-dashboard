export default function DashboardBox({ children, className = "" }) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-md border border-gray-200 bg-gray-50 p-8 ${className}`}
    >
      {children}
    </div>
  );
}
