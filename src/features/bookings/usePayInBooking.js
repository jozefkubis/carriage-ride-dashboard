import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

export default function usePayInBooking() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: payInBooking, isLoading: isPayingIn } = useMutation({
        mutationFn: ({ bookingId }) =>
            updateBooking(bookingId, { isPaid: true }),
        onSuccess: (data) => {
            toast.success(`Rezervácia #${data.id} úspešne aktualizovaná`);
            queryClient.invalidateQueries({ queryKey: ["booking"] });
            setTimeout(() => {
                navigate("/bookings");
            }, 2000);
        },
        onError: (err) => toast.error(err.message),
    });

    return { payInBooking, isPayingIn };
}
