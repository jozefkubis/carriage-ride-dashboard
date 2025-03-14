import { format, isToday } from "date-fns";
import Tag from "../../components/Tag";
import Table from "../../components/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

const Ride = ({ children }) => {
  return (
    <div className="font-sono text-[1.6rem] font-semibold text-gray-600">
      {children}
    </div>
  );
};

const Stacked = ({ children }) => {
  return <div className="flex flex-col gap-[0.2rem]">{children}</div>;
};

const Amount = ({ children }) => {
  return <div className="font-sono font-medium">{children}</div>;
};

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const guestIdToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Ride>{cabinName}</Ride>

      <Stacked>
        <span className="font-medium">{guestName}</span>
        <span className="text-[1.2rem] text-gray-500">{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={guestIdToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  );
}

export default BookingRow;
