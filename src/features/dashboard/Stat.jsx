function Stat({ icon, title, value, color }) {
  return (
    <div className="grid grid-cols-[4rem_1fr] grid-rows-2 gap-x-4 gap-y-1 rounded-md border border-gray-200 bg-white p-4 dark:bg-gray-800 dark:text-gray-200">
      <div
        className={`row-span-2 flex aspect-square items-center justify-center rounded-full bg-${color}-100 dark:bg-gray-200`}
      >
        <span className={`text-${color}-700 dark:text-gray-800`}>{icon}</span>
      </div>
      <h5 className="self-end text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-200">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none">{value}</p>
    </div>
  );
}

export default Stat;
