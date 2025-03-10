import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRide as deleteRideApi } from "../../services/apiRides";
import toast from "react-hot-toast";

export function useDeleteRide() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRide } = useMutation({
    // mutationFn: (id) => deleteRide(id),
    mutationFn: deleteRideApi,
    onSuccess: () => {
      toast.success("Jazda úspešne odstránená");
      queryClient.invalidateQueries({ queryKey: ["ride"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRide };
}
