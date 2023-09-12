import { type UserDto } from "common";

interface UserInfoProps {
  user: UserDto;
}

export default function UserInfo({ user }: UserInfoProps): JSX.Element {
  return (
    <div className="text-sm font-semibold leading-6 text-gray-900">
      {user ? user.email : ""}
    </div>
  );
}
