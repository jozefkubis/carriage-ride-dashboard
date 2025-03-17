import { format } from "date-fns";
import { ImEye } from "react-icons/im";
import Table from "../../components/Table";
import Tag from "../../components/Tag";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const Ride = ({ children }) => {
  return (
    <div className="font-sono text-[1rem] font-semibold text-gray-600">
      {children}
    </div>
  );
};

const Stacked = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-[0.2rem] text-[1rem] text-gray-700">
      {children}
    </div>
  );
};

const Amount = ({ children }) => {
  return <div className="font-sono text-[1rem] font-medium">{children}</div>;
};

function BookingRow({
  booking: {
    id: bookingId,
    guestId,
    created_at,
    date,
    time,
    numGuests,
    status,
    notes,
    fullName,
    phone,
    email,
    cride: { name: rideName, regularPrice: ridePrice, discount: rideDiscount },
  },
}) {
  const guestIdToTagName = {
    zaplatené: "success",
    nezaplatené: "secondary",
  };

  const navigate = useNavigate();

  const totalPrice = ridePrice - rideDiscount;

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
        <span className="text-sm text-gray-500">{email}</span>
      </Stacked>

      <Stacked>{rideName}</Stacked>
      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Tag type={guestIdToTagName[status]}>{status.replace("-", " ")}</Tag>

      <button onClick={() => navigate(`/bookings/${bookingId}`)}>
        <ImEye />
      </button>
    </Table.Row>
  );
}

export default BookingRow;
