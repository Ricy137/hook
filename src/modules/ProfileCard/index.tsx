import { shortenAddress } from "@utils/address";
import { Link } from "react-router-dom";

export interface ProfileCardProps {
  id: string;
  name: string;
  owner: string;
  link: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ id, name, owner, link }) => {
  return (
    <Link
      to={link}
      className="p-24px sm:p-40px flex flex-col gap-y-24px no-underline hover:bg-#CBF0ED rounded-24px shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] cursor-pointer"
    >
      <div className="h-24px text-16px leading-24px text-#969799 truncate">
        id: {id}
      </div>
      <div className="w-full font-medium text-18px leading-32px truncate">
        name: {name}
      </div>
      <div className="w-full text-16px leading-24px">
        owner: {shortenAddress({ address: owner })}
      </div>
    </Link>
  );
};

export default ProfileCard;
