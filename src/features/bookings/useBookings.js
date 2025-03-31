import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constans";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Získanie aktuálnej stránky; ak nie je definovaná, použije sa stránka 1.
  const currentPage = Number(searchParams.get("page")) || 1;

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", currentPage],
    queryFn: () => getBookings({ page: currentPage }),
  });

  // Celkový počet záznamov (fallback na 0, ak nie je k dispozícii)
  const totalCount = count || 0;
  const pageCount = Math.ceil(totalCount / PAGE_SIZE);

  // Prefetchovanie nasledujúcej stránky, ak existuje
  if (currentPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", currentPage + 1],
      queryFn: () => getBookings({ page: currentPage + 1 }),
    });
  }

  // Prefetchovanie predchádzajúcej stránky, ak existuje
  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", currentPage - 1],
      queryFn: () => getBookings({ page: currentPage - 1 }),
    });
  }

  return { isLoading, bookings, error, count, page: currentPage };
}
