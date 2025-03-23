import { GiConfirmed } from "react-icons/gi";
import { GrInProgress } from "react-icons/gr";
import { HiOutlineBanknotes, HiOutlineBriefcase } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

export default function Stats({ bookings }) {
  const numBookings = bookings.length;

  const isPaidBookings = bookings.filter((booking) => booking.isPaid === true);
  const numPaidBookings = isPaidBookings.length;

  const isNotPaidBookings = bookings.filter(
    (booking) => booking.isPaid === false,
  );
  const numNotPaidBookings = isNotPaidBookings.length;

  const sales = isPaidBookings.reduce(
    (acc, cur) => acc + (cur.cride.regularPrice - cur.cride.discount),
    0,
  );

  return (
    <>
      <Stat
        title="Rezervácie"
        color="blue"
        icon={<HiOutlineBriefcase size={32} />}
        value={numBookings}
      />

      <Stat
        title="Zaplatené rezervácie"
        color="yellow"
        icon={<GiConfirmed size={32} />}
        value={numPaidBookings}
      />

      <Stat
        title="Nezaplatené rezervácie"
        color="red"
        icon={<GrInProgress size={32} />}
        value={numNotPaidBookings}
      />

      <Stat
        title="Profit"
        color="green"
        icon={<HiOutlineBanknotes size={32} />}
        value={formatCurrency(sales)}
      />
    </>
  );
}
