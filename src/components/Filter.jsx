import { useSearchParams } from "react-router-dom";

const StyledFilter = ({ children }) => {
  return (
    <div className="flex gap-2 rounded-md border border-gray-200 bg-white p-1 shadow-sm">
      {children}
    </div>
  );
};

const FilterButton = ({ active, children, ...props }) => {
  return (
    <button
      className={`rounded-md border-none px-3 py-1 text-[1rem] font-medium transition-colors duration-300 ${active ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-600 hover:text-white"}`}
      {...props}
    >
      {children}
    </button>
  );
};

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("isPaid") || "všetky";

  function handleClick(value) {
    searchParams.set("isPaid", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      <FilterButton
        active={currentFilter === "všetky"}
        disabled={currentFilter === "všetky"}
        onClick={() => handleClick("všetky")}
      >
        Všetky rezervácie
      </FilterButton>
      <FilterButton
        active={currentFilter === "true"}
        disabled={currentFilter === "true"}
        onClick={() => handleClick("true")}
      >
        Zaplatené
      </FilterButton>
      <FilterButton
        active={currentFilter === "false"}
        disabled={currentFilter === "false"}
        onClick={() => handleClick("false")}
      >
        Nezaplatené
      </FilterButton>
    </StyledFilter>
  );
}

export default Filter;
