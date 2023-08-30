import { useParams } from "react-router-dom";
import { ProfilesListById } from "@modules/ProfileList";

const ExploreProfile: React.FC = () => {
  const { address } = useParams<{ address: string }>();
  return (
    <div className="mt-40px flex flex-col w-95% sm:w-85%">
      <div className="font-medium text-32px leading-40px mb-24px">
        Address: {address}
      </div>
      {address ? (
        <ProfilesListById address={address} />
      ) : (
        <div>Error! Didn't detected intended address</div>
      )}
    </div>
  );
};

export default ExploreProfile;
