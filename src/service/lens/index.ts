import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { LENS_API_URL } from "@utils/constants";

const lensClient = new ApolloClient({
  uri: LENS_API_URL,
  cache: new InMemoryCache(),
});

const DefaultProfileQuery = gql`
  query ProfileByOwner($ethereumAddress: EthereumAddress!) {
    defaultProfile(request: { ethereumAddress: $ethereumAddress }) {
      handle
    }
  }
`;

export const getProfileByOwner = async (ethereumAddress: string) => {
  const { data } = await lensClient.query({
    query: DefaultProfileQuery,
    variables: { ethereumAddress },
  });
  return data.defaultProfile.handle;
};
