import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRide } from "../../services/apiRides";
import toast from "react-hot-toast";

export function useCreateRide() {
  const queryClient = useQueryClient();

  const { mutate: createRide, isLoading: isCreating } = useMutation({
    mutationFn: createEditRide,
    onSuccess: () => {
      toast.success("Jazda bola úspešne pridaná");
      queryClient.invalidateQueries({ queryKey: ["ride"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRide };
}
