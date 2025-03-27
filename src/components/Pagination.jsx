import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constans";

const StyledPagination = ({ children }) => (
  <div className="flex w-full items-center justify-between text-[1rem]">
    {children}
  </div>
);

const P = ({ children }) => <p className="ml-2 text-[1rem]">{children}</p>;

const Buttons = ({ children }) => <div className="flex gap-2">{children}</div>;

const PaginationButton = ({
  onClick,
  active,
  disabled,
  children,
  ...props
}) => (
  <button
    className={`flex items-center justify-center gap-1 rounded-md px-3 py-2 text-[1rem] transition ${
      disabled
        ? "cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-200"
        : active
          ? "bg-blue-600 text-white"
          : "bg-gray-50 hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-600 dark:hover:text-white"
    }`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <P>
        <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> až{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        z <span>{count}</span> záznamov
      </P>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Predošlá strana</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Nasledujúca strana</span> <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
