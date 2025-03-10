import { useQuery } from "@tanstack/react-query";
import { getRides } from "../../services/apiRides";

export function useRides() {
  const {
    isLoading,
    data: rides,
    error,
  } = useQuery({
    queryKey: ["ride"],
    queryFn: getRides,
  });

  return { isLoading, rides, error };
}
