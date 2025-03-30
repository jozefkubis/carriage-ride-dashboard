import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateLandingPageData } from "../../services/apiLanding";

export function useEditLanding() {
  const queryClient = useQueryClient();

  const { mutate: editLanding, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, updates }) => updateLandingPageData(id, updates),
    onSuccess: () => {
      toast.success("Titulná strana bola úspešne upravená");
      queryClient.invalidateQueries({ queryKey: ["landingPage"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editLanding };
}
