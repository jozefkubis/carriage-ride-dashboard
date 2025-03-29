import { useQuery } from "@tanstack/react-query";
import { getReferences } from "../../services/apiReferences";

export function useReferences() {
  const {
    isLoading,
    data: references,
    error,
  } = useQuery({
    queryKey: ["references"],
    queryFn: getReferences,
  });

  return { isLoading, references, error };
}
