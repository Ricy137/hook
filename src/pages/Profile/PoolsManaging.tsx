import { Link } from "react-router-dom";
import Icon from "@assets/Logos/individual.svg";
import { SectionCard } from "@modules/Cards";
import Button from "@components/Button";

const PoolManaged: React.FC = () => {
  return (
    <SectionCard icon={Icon} title="Managed Pools">
      <CreateProfileBtn />
    </SectionCard>
  );
};

const CreateProfileBtn: React.FC = () => {
  return (
    <Link to="/profile/createpool" className="mt-24px no-underline">
      <Button variant="outlined">Create Pool</Button>
    </Link>
  );
};

export default PoolManaged;
