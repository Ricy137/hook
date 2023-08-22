import { Link } from "react-router-dom";
import Icon from "@assets/Logos/individual.svg";
import { SectionCard } from "@modules/Cards";
import Button from "@components/Button";

const ProfileOwned: React.FC = () => {
  return (
    <SectionCard icon={Icon} title="Owned Profiles">
      <CreateProfileBtn />
    </SectionCard>
  );
};

const CreateProfileBtn: React.FC = () => {
  return (
    <Link to="/profile/create" className="no-underline">
      <Button variant="outlined">Create Profile</Button>
    </Link>
  );
};

export default ProfileOwned;
