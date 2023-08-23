import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import Icon from "@assets/Logos/individual.svg";
import { SectionCard } from "@modules/Cards";
import ProfileOwnedList from "@modules/ProfileOwnedList";
import Button from "@components/Button";

const ProfileOwned: React.FC = () => {
  const { address } = useAccount();
  return (
    <SectionCard icon={Icon} title="Owned Profiles">
      <ProfileOwnedList address={address as string} />
      <CreateProfileBtn />
    </SectionCard>
  );
};

const CreateProfileBtn: React.FC = () => {
  return (
    <Link to="/profile/create" className="mt-24px no-underline">
      <Button variant="outlined">Create Profile</Button>
    </Link>
  );
};

export default ProfileOwned;
