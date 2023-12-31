import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import useSWR from "swr";
import AddrCard from "@modules/AddrCard";
import { splitedAddress } from "@utils/address";
import { getCid, getSuffix } from "@utils/web3Storage";
import { fetcher } from "@utils/fetch";
import { ProfileDetailData } from "@service/profile";
import { Account } from "@cusTypes/index";

const PROFILES_QUERY = gql`
  query ProfilesById($id: String!) {
    profile(id: $id) {
      id
      name
      metadata {
        protocol
        pointer
      }
      owner {
        id
      }
      memberRole {
        accounts {
          id
        }
      }
    }
  }
`;

const ProfileDetail: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const { loading, error, data } = useQuery<{ profile: ProfileDetailData }>(
    PROFILES_QUERY,
    {
      variables: { id: profileId },
    }
  );

  return (
    <div className="mt-40px flex flex-col w-95% sm:w-85% ">
      <div className="font-medium text-32px leading-40px mb-24px">
        Profile Details
      </div>
      <div className="p-40px flex flex-col gap-y-24px w-full border-#cacbcb border-1px border-dashed rounded-24px box-border">
        <div className="w-full text-16px leading-24px text-#969799 truncate">
          id: {profileId}
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error! {error.message}</div>}
        {data && (
          <ProfileMetaData
            pointer={getCid(data.profile.metadata.pointer)}
            suffixed={getSuffix(data.profile.metadata.pointer)}
          />
        )}
      </div>
      {data && <Owner address={data.profile.owner.id} />}
      {data && <Members members={data.profile.memberRole.accounts} />}
    </div>
  );
};

const Owner: React.FC<{ address: string }> = ({ address }) => {
  return (
    <div className="flex flex-col">
      <div className="font-medium text-32px leading-40px my-24px">
        Profile Owner
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24px">
        <AddrCard address={address} />
      </div>
    </div>
  );
};

const Members: React.FC<{ members: Account[] }> = ({ members }) => {
  return (
    <div className="flex flex-col">
      <div className="font-medium text-32px leading-40px my-24px">
        Profile Members
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24px">
        {members.map((member) => (
          <AddrCard address={splitedAddress(member.id)} key={member.id} />
        ))}
      </div>
    </div>
  );
};

export default ProfileDetail;

const ProfileMetaData: React.FC<{
  pointer: string;
  suffixed?: string;
}> = ({ pointer, suffixed }) => {
  const { data, isLoading, error } = useSWR(
    `https://${pointer}.ipfs.w3s.link/${suffixed ?? "metadata.json"}`,
    fetcher
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;
  return (
    <ul className="pl-0px flex flex-col gap-y-24px w-full">
      {Object.keys(data).map((key) => {
        if (key === "members" || key === "owner" || key === "customizedItems")
          return;
        return (
          <li className="w-full text-18px leading-26px" key={key}>
            <span className="font-medium">{key}: </span>
            {data[key] ?? "none"}
          </li>
        );
      })}
    </ul>
  );
};
