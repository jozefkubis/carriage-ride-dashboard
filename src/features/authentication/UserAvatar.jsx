import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-5 text-[1rem] font-medium text-gray-600">
      <img
        src={avatar || "avatar.png"}
        alt={`Avatar of ${fullName}`}
        className="block h-14 w-14 rounded-full object-cover object-center outline outline-2 outline-gray-100"
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
