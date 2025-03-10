import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditRide } from "../../services/apiRides";
import toast from "react-hot-toast";

export function useEditRide() {
  const queryClient = useQueryClient();

  const { mutate: editRide, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRideData, id }) => createEditRide(newRideData, id),
    onSuccess: () => {
      toast.success("Jazda bola úspešne upravená");
      queryClient.invalidateQueries({ queryKey: ["ride"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editRide };
}
