import { useCallback } from "react";
import { useQuery, gql, ApolloError } from "@apollo/client";
import { useShowToast } from "@components/Toast";
import ProfileList from "@modules/ProfileList";
import Button from "@components/Button";

const PROFILES_QUERY = gql`
  query PROFILES($skip: Int!) {
    profiles(first: 5, skip: $skip) {
      id
      name
      owner {
        id
      }
    }
  }
`;

const FullProfiles: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery(PROFILES_QUERY, {
    variables: {
      skip: 0,
    },
  });
  const showToast = useShowToast();

  const handleLoadMore = useCallback(async () => {
    try {
      const newData = await fetchMore({
        variables: {
          skip: data?.profiles.length,
        },
      });
      if (newData && newData?.data.profiles.length === 0) {
        showToast({ content: "no more profiles", type: "failed" });
      }
    } catch (e) {
      console.log(e);
    }
  }, [data]);

  return (
    <div className="p-40px flex flex-col gap-y-24px w-full">
      <ProfileList data={data} loading={loading} error={error} />
      <Button onClick={handleLoadMore}>Load More</Button>
    </div>
  );
};

export default FullProfiles;

export const FullProfilesErrorBoundary: React.FC = () => (
  <div className="p-40px flex flex-col gap-y-24px w-full">
    <div>Failed to load</div>
  </div>
);
