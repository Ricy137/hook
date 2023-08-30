import { useCallback } from "react";
import { useQuery, gql } from "@apollo/client";
import { UseFormSetValue } from "react-hook-form";
import { useAccount } from "wagmi";
import Select, { Option } from "@components/Select";
import Label from "@components/Label";
import { Account } from "@cusTypes/index";
import { profileIdfromRole } from "@utils/graphQl";
import { PoolData } from "@service/pool";

const PROFILEID_QUERY = gql`
  query ProfileId($id: String!) {
    account(id: $id) {
      roles {
        id
      }
    }
  }
`;

const ProfileIdStatus = {
  loading: { label: "loading...", value: "" },
  error: { label: "failed to fetch the profile id", value: "" },
} as const;

const ProfileSelect: React.FC<{ setValue: UseFormSetValue<PoolData> }> = ({
  setValue,
}) => {
  const { address } = useAccount();
  const { loading, error, data } = useQuery<{ account: Account }>(
    PROFILEID_QUERY,
    {
      variables: { id: address },
    }
  );

  const setOption = useCallback((option: Option) => {
    setValue("profileId", option.value as string);
  }, []);

  return (
    <div>
      <Label title="Profile ID" name="profileId" required />
      <Select
        options={
          loading || error || !data || data.account.roles.length === 0
            ? [ProfileIdStatus[loading ? "loading" : "error"]]
            : data.account.roles.map((role) => ({
                label: profileIdfromRole(role.id),
                value: profileIdfromRole(role.id),
              }))
        }
        setOption={setOption}
        wrapperClass="w-full"
        className="w-full"
      />
    </div>
  );
};

export default ProfileSelect;
