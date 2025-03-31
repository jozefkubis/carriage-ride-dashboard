import clsx from "clsx";
import { format } from "date-fns";
import { sk } from "date-fns/locale";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdEuro } from "react-icons/md";

import DataItem from "../../components/DataItem";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

function BookingDataBox({ booking }) {
  const {
    isPaid,
    created_at,
    date,
    time,
    numGuests,
    notes,
    fullName,
    phone,
    email,
    cride: { regularPrice: ridePrice, discount: rideDiscount },
  } = booking;

  // Vypočítame celkovú cenu a formátujeme čas jazdy
  const totalPrice = ridePrice - rideDiscount;
  const rideTime = time.split(":").slice(0, 2).join(":");

  // Formátovanie dátumu a vzdialenosti od dnešného dňa
  const formattedDate = format(new Date(date), "EEE, d. MMM yyyy", {
    locale: sk,
  });
  const distanceFromNow = formatDistanceFromNow(date);

  return (
    <section className="my-10 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
      {/* HEADER */}
      <header className="flex items-center justify-between bg-indigo-500 px-10 py-5 text-[1.8rem] font-medium text-indigo-100">
        <p>
          {formattedDate} ({distanceFromNow}) {rideTime}
        </p>
      </header>

      {/* MAIN CONTENT */}
      <section className="px-10 py-8 dark:bg-gray-800 dark:text-gray-200">
        {/* Guest Info */}
        <div className="mb-6 flex items-center gap-4 text-gray-500">
          <p className="font-medium text-gray-700 dark:text-gray-200">
            👬 {fullName}{" "}
            {numGuests > 1 &&
              `+ ${numGuests - 1} ${numGuests === 2 ? "hosť" : "hostia"}`}
          </p>
          <span>→</span>
          <a
            href={`mailto:${email}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            <span className="text-2xl">📧</span> {email}
          </a>
          <a
            href={`tel:${phone}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            <span className="text-2xl">☎</span> {phone}
          </a>
        </div>

        {/* Observations */}
        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label="Poznámky"
        >
          {notes ? notes : <p className="text-gray-500">"Žiadne poznámky"</p>}
        </DataItem>

        {/* PRICE BOX */}
        <div
          className={clsx(
            "mt-6 flex items-center justify-between rounded-sm px-8 py-4",
            isPaid
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700",
          )}
        >
          <DataItem icon={<MdEuro />} label="Celková cena">
            {formatCurrency(totalPrice)}
          </DataItem>
          <p className="text-[1.4rem] font-semibold uppercase">
            {isPaid ? "Zaplatené" : "Nezaplatené"}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-4 text-right text-[1.2rem] text-gray-500 dark:bg-gray-800 dark:text-gray-200">
        <p>
          Rezervované{" "}
          {format(new Date(created_at), "EEE, d. MMM yyyy, p", { locale: sk })}
        </p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
