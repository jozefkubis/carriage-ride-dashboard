import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateCurrentUser } from "../../services/apiAuth"

export function useUpdateUser() {
  const queryClient = useQueryClient()

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // mutationFn: (newcabin) => createCabin(newcabin),
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("Údaje boli úspešne aktualizované")
      queryClient.setQueryData(["user"], user)
    },
    onError: (err) => toast.error(err.message),
  })

  return { updateUser, isUpdating }
}
