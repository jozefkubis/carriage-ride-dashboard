import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

export default function useCheckInBooking() {
    const queryClient = useQueryClient();
    const navigate = useNavigate(); // ✅ Správne použitie useNavigate()

    const { mutate: checkInBooking, isLoading: isCheckingIn } = useMutation({
        mutationFn: ({ bookingId }) =>
            updateBooking(bookingId, { isPaid: true }), // ✅ Posielame objekt s `isPaid: true`
        onSuccess: (data) => {
            toast.success(`Rezervácia #${data.id} úspešne aktualizovaná`);
            queryClient.invalidateQueries({ queryKey: ["booking"] });
            navigate("/bookings"); // ✅ Správne presmerovanie
        },
        onError: (err) => toast.error(err.message),
    });

    return { checkInBooking, isCheckingIn };
}
