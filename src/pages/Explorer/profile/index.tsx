import { useParams } from "react-router-dom";
import ProfileOwnedList from "@modules/ProfileOwnedList";

const ExploreProfile: React.FC = () => {
  const { OwnerAddress } = useParams<{ OwnerAddress: string }>();
  return (
    <div className="mt-40px flex flex-col w-95% sm:w-85%">
      <div className="font-medium text-32px leading-40px mb-24px">
        Owner: {OwnerAddress}
      </div>
      {OwnerAddress ? (
        <ProfileOwnedList address={OwnerAddress} />
      ) : (
        <div>Error! Didn't detected intended address</div>
      )}
    </div>
  );
};

export default ExploreProfile;
