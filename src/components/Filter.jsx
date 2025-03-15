import { useSearchParams } from "react-router-dom";

const StyledFilter = ({ children }) => {
  return (
    <div className="flex gap-2 rounded-md border border-gray-200 bg-white p-2 shadow-sm">
      {children}
    </div>
  );
};

const FilterButton = ({ active, children, ...props }) => {
  return (
    <button
      className={`rounded-md border-none bg-white px-3 py-1 text-[1rem] font-medium transition-colors duration-300 ${active ? "bg-blue-600 text-white" : "hover:bg-blue-600 hover:text-white"}`}
      {...props}
    >
      {children}
    </button>
  );
};

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("status", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      <FilterButton onClick={() => handleClick("všetky")}>
        Vsetky objednávky
      </FilterButton>
      <FilterButton onClick={() => handleClick("zaplatené")}>
        Zaplatené
      </FilterButton>
      <FilterButton onClick={() => handleClick("nezaplatené")}>
        Nezaplatené
      </FilterButton>
    </StyledFilter>
  );
}

export default Filter;
