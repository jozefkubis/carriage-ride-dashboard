import { format } from "date-fns";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const Ride = ({ children }) => (
  <div className="font-sono text-[1rem] font-semibold text-gray-600 dark:text-gray-200">
    {children}
  </div>
);

const Stacked = ({ children }) => (
  <div className="flex flex-col items-start gap-[0.2rem] text-[1rem] text-gray-700 dark:text-gray-200">
    {children}
  </div>
);

const Amount = ({ children }) => (
  <div className="font-sono text-[1rem] font-medium">{children}</div>
);

// Mapa pre typ tagu na základe statusu platby
const statusToTagType = {
  zaplatené: "success",
  nezaplatené: "secondary",
};

function BookingRow({
  booking: {
    id: bookingId,
    isPaid,
    date,
    time,
    numGuests,
    fullName,
    email,
    cride: { name: rideName, regularPrice: ridePrice, discount: rideDiscount },
  },
}) {
  const navigate = useNavigate();

  const totalPrice = ridePrice - rideDiscount;
  const status = isPaid ? "zaplatené" : "nezaplatené";

  return (
    <Table.Row>
      <Stacked>
        <span>{format(new Date(date), "MMM dd yyyy")}</span>
      </Stacked>

      <Stacked>
        <span>{time}</span>
      </Stacked>

      <Stacked>
        <span>{numGuests}</span>
      </Stacked>

      <Stacked>
        <span>{fullName}</span>
        <span className="text-sm text-gray-500 dark:text-gray-200">
          {email}
        </span>
      </Stacked>

      <Stacked>
        <Ride>{rideName}</Ride>
      </Stacked>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Tag type={statusToTagType[status]}>{status.replace("-", " ")}</Tag>

      <button onClick={() => navigate(`/bookings/${bookingId}`)}>
        <TbCircleArrowRightFilled className="h-6 w-6 text-gray-400 hover:scale-110 hover:text-gray-500 active:scale-90" />
      </button>
    </Table.Row>
  );
}

export default BookingRow;
