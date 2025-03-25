import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

export default function TodayItem({ activity }) {
  const { id, fullName, isPaid, time } = activity;

  const rideTime = time.split(":").slice(0, 2).join(":");

  const navigate = useNavigate();

  return (
    <li className="grid grid-cols-[1.5fr_2fr_0.8fr_1.5fr] items-center gap-3 border-b border-gray-200 py-2 text-sm first:border-t">
      {isPaid === true && <Tag type="success">Zaplatené</Tag>}
      {isPaid === false && <Tag type="secondary">Nezaplatené</Tag>}

      <div className="text-[1rem] font-medium">{activity.cride.name}</div>
      <div className="text-[1rem] font-medium">{rideTime}</div>

      <Button
        size="medium"
        variant="primary"
        onClick={() => navigate(`/bookings/${id}`)}
      >
        Detail
      </Button>
    </li>
  );
}
