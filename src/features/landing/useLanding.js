import { useQuery } from "@tanstack/react-query";
import { getLandingPageData as getLandingPageDataApi } from "../../services/apiLanding";

export function useLanding() {
  const {
    isLoading,
    data: landingPageData,
    error,
  } = useQuery({
    queryKey: ["landingPage"],
    queryFn: getLandingPageDataApi,
  });

  return { isLoading, landingPageData, error };
}
