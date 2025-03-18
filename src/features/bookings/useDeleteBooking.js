import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings"
import { useNavigate } from "react-router-dom"

export function useDeleteBooking() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        // mutationFn: (id) => deleteCabin(id),
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success("Rezervácia bola úspešne odstranená");
            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            })
            setTimeout(() => {
                navigate("/bookings");
            }, 2000);
        },
        onError: (err) => toast.error(err.message),
    })

    return { isDeleting, deleteBooking }
}
