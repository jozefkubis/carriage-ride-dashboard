import Heading from "../../components/Heading";
import { RowHorizontal } from "../../components/Rows";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../components/Spinner";
import TodayItem from "./TodayItem";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <div className="col-span-2 flex flex-col gap-6 rounded-md border border-gray-200 bg-white p-8 pt-6 dark:bg-gray-800 dark:text-gray-200">
      <RowHorizontal type="horizontal">
        <Heading type="h2">Dnes 🐴</Heading>
      </RowHorizontal>

      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className="scrollbar-hide max-h-48 overflow-y-auto overflow-x-hidden">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-center text-lg font-medium">
            Dnes nemáte žiadne rezervácie.
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
