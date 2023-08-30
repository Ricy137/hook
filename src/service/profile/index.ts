import { useQuery, gql } from "@apollo/client";
import { MetaData, Account } from "@cusTypes/index";

export interface ProfileData {
  id: string;
  name: string;
  owner: {
    id: string;
  };
}

export interface ProfileDetailData extends ProfileData {
  metadata: MetaData;
  memberRole: {
    accounts: Account[];
  };
}

const PROFILEID_QUERY = gql`
  query ProfileId($id: String!) {
    account(id: $id) {
      roles {
        id
      }
    }
  }
`;

export const useAddressToProfile = (address: string) => {
  const { loading, error, data } = useQuery<{ account: Account }>(
    PROFILEID_QUERY,
    {
      variables: { id: address },
    }
  );

  return { loading, error, data };
};
