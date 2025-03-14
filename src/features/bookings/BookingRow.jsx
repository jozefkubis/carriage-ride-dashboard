import { format, isToday } from "date-fns";
import Tag from "../../components/Tag";
import Table from "../../components/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

const Ride = ({ children }) => {
  return (
    <div className="font-sono text-[1rem] font-semibold text-gray-600">
      {children}
    </div>
  );
};

const Stacked = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-[0.2rem] text-[1rem]">
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
  // const guestIdToTagName = {
  //   unconfirmed: "blue",
  //   "checked-in": "green",
  //   "checked-out": "silver",
  // };
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
      {/* <Stacked>
        <span>{status}</span>
      </Stacked> */}
      <Stacked>
        <span>{notes}</span>
      </Stacked>
      <Stacked>
        <span>{fullName}</span>
      </Stacked>
      <Stacked>
        <span>{phone}</span>
      </Stacked>

      <Stacked>
        <span>{email}</span>
      </Stacked>

      {/* <Tag type={guestIdToTagName[status]}>{status.replace("-", " ")}</Tag> */}

      <Stacked>{rideName}</Stacked>
      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  );
}

export default BookingRow;
