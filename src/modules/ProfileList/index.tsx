import { useQuery, gql, ApolloError } from "@apollo/client";
import ProfileCard, { ProfileCardById } from "@modules/ProfileCard";
import { ProfileData } from "@service/profile";
import { splitedId } from "@utils/allo";
import { Account } from "@cusTypes/index";

const ProfileList: React.FC<{
  data: { profiles: ProfileData[] } | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}> = ({ data, loading, error }) => {
  return (
    <div className="w-full">
      {loading && <div>Loading...</div>}
      {error && <div>Error! {error.message}</div>}
      {data && data.profiles && data.profiles.length === 0 && (
        <div>No profiles found</div>
      )}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-24px">
        {data &&
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

export default ProfileList;

const PROFILEID_QUERY = gql`
  query ProfileId($id: String!) {
    account(id: $id) {
      roles {
        id
      }
    }
  }
`;

export const ProfilesListById: React.FC<{ address: string }> = ({
  address,
}) => {
  const { loading, error, data } = useQuery<{ account: Account }>(
    PROFILEID_QUERY,
    {
      variables: { id: address },
    }
  );

  return (
    <div className="w-full">
      {loading && <div>Loading...</div>}
      {error && <div>Error! {error.message}</div>}
      {data && data.account.roles.length === 0 && <div>No profiles found</div>}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-24px">
        {data &&
          data.account.roles.length > 0 &&
          data.account.roles.map((role) => (
            <ProfileCardById key={role.id} id={splitedId(role.id)} />
          ))}
      </div>
    </div>
  );
};
