import { useMutation } from "@tanstack/react-query"
import { signup as signupApi } from "../../services/apiAuth"
import toast from "react-hot-toast"

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Účet bol úspešne vytvorený! Overte nový účet z e-mailovej adresy používateľa."
      )
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  return { signup, isLoading }
}
