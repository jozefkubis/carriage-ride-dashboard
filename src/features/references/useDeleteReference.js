import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReference as deleteReferenceApi } from "../../services/apiReferences";
import toast from "react-hot-toast";

export function useDeleteReference() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteReference } = useMutation({
    mutationFn: deleteReferenceApi,
    onSuccess: () => {
      toast.success("Referencia bola úspešne odstránená");
      queryClient.invalidateQueries({ queryKey: ["references"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteReference };
}
