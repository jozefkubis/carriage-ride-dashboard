import { useSearchParams } from "react-router-dom";

const StyledFilter = ({ children }) => {
  return (
    <div className="flex gap-2 rounded-md border border-gray-200 bg-white p-1 shadow-sm dark:bg-gray-700">
      {children}
    </div>
  );
};

const FilterButton = ({ active, children, ...props }) => {
  return (
    <button
      className={`rounded-md px-3 py-1 text-[1rem] font-medium transition-colors duration-300 ${active ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-600 hover:text-white"} dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white ${active ? "dark:bg-blue-600 dark:text-white" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter ? true : undefined}
          disabled={option.value === currentFilter ? true : undefined}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
