import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useAccount } from "wagmi";
import Icon from "@assets/Logos/individual.svg";
import Button from "@components/Button";
import { SectionCard } from "@modules/Cards";
import ProfileList from "@modules/ProfileList";
import { ProfileData } from "@service/profile";

const ProfileOwned: React.FC = () => {
  const { address } = useAccount();
  const refresh = useCallback(() => {
    location.reload();
  }, []);

  return (
    <SectionCard icon={Icon} title="Owned Profiles">
      <Button
        className="mb-24px sm:hidden"
        variant="outlined"
        onClick={refresh}
      >
        Refresh Page
      </Button>
      <ProfileOwnedList address={address as string} />
      <CreateProfileBtn />
    </SectionCard>
  );
};

const CreateProfileBtn: React.FC = () => {
  return (
    <Link to="/profile/createprofile" className="mt-24px no-underline">
      <Button variant="outlined">Create Profile</Button>
    </Link>
  );
};

const PROFILES_QUERY = gql`
  query ProfilesByOwner($ownerAdd: String!) {
    profiles(where: { owner_: { id: $ownerAdd } }) {
      id
      name
      owner {
        id
      }
    }
  }
`;

const ProfileOwnedList: React.FC<{ address: string }> = ({ address }) => {
  const { loading, error, data } = useQuery<{ profiles: ProfileData[] }>(
    PROFILES_QUERY,
    {
      variables: { ownerAdd: address },
    }
  );

  return (
    <ProfileList
      data={data}
      loading={loading}
      error={error}
      linkPrefix="/profile/editprofile"
    />
  );
};

export default ProfileOwned;
