import { useQuery, gql } from "@apollo/client";
import ProfileCard from "@modules/ProfileCard";
import { ProfileData } from "@service/profile";

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
    <div className="w-full">
      {loading && <div>Loading...</div>}
      {error && <div>Error! {error.message}</div>}
      {data && data.profiles.length === 0 && <div>No profiles found</div>}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-24px">
        {data &&
          data.profiles.length > 0 &&
          data.profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              owner={profile.owner.id}
              link={`/profile/${profile.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ProfileOwnedList;
